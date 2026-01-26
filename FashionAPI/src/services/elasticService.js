// Using native http module to avoid node-fetch ESM issues
const http = require('http');

const ELASTIC_HOST = process.env.ELASTICSEARCH_HOST || 'elasticsearch';
const ELASTIC_PORT = process.env.ELASTICSEARCH_PORT || 9200;
const INDEX_NAME = 'products';

const getBaseUrl = () => `http://${ELASTIC_HOST}:${ELASTIC_PORT}`;

// Helper function to make HTTP requests
const httpRequest = (url, options = {}) => {
    return new Promise((resolve, reject) => {
        const urlObj = new URL(url);
        const reqOptions = {
            hostname: urlObj.hostname,
            port: urlObj.port || 80,
            path: urlObj.pathname + urlObj.search,
            method: options.method || 'GET',
            headers: options.headers || {}
        };

        const req = http.request(reqOptions, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                resolve({
                    ok: res.statusCode >= 200 && res.statusCode < 300,
                    status: res.statusCode,
                    text: () => Promise.resolve(data),
                    json: () => Promise.resolve(JSON.parse(data || '{}'))
                });
            });
        });

        req.on('error', reject);

        if (options.body) {
            req.write(options.body);
        }
        req.end();
    });
};

let elasticService = {
    checkConnection: async () => {
        try {
            const response = await httpRequest(getBaseUrl());
            return response.ok;
        } catch (error) {
            console.error('Elasticsearch connection error:', error.message);
            return false;
        }
    },

    createIndex: async () => {
        try {
            // Check if index exists
            const check = await httpRequest(`${getBaseUrl()}/${INDEX_NAME}`, { method: 'HEAD' });
            if (check.ok) {
                console.log(`Index ${INDEX_NAME} already exists.`);
                return true;
            }

            // Create index with mappings
            const mappings = {
                mappings: {
                    properties: {
                        id: { type: "integer" },
                        name: { type: "text" },
                        price: { type: "long" },
                        description: { type: "text" },
                        contentHTML: { type: "text" },
                        brand: { type: "keyword" },
                        category: { type: "keyword" }
                    }
                }
            };

            const response = await httpRequest(`${getBaseUrl()}/${INDEX_NAME}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(mappings)
            });

            if (!response.ok) {
                const text = await response.text();
                console.error('Failed to create index:', text);
                return false;
            }

            console.log(`Index ${INDEX_NAME} created successfully.`);
            return true;
        } catch (error) {
            console.error('Error creating index:', error.message);
            return false;
        }
    },

    bulkIndexProducts: async (products) => {
        if (!products || products.length === 0) return 0;

        try {
            // Prepare bulk body (NDJSON format)
            let body = '';
            products.forEach(product => {
                // Action line
                body += JSON.stringify({ index: { _index: INDEX_NAME, _id: product.id } }) + '\n';

                // Data line
                const doc = {
                    id: product.id,
                    name: product.name,
                    description: product.contentMarkdown,
                    contentHTML: product.contentHTML,
                    brand: product.brandData ? product.brandData.value : null,
                    category: product.categoryData ? product.categoryData.value : null
                };
                body += JSON.stringify(doc) + '\n';
            });

            const response = await httpRequest(`${getBaseUrl()}/_bulk`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: body
            });

            const result = await response.json();
            if (result.errors) {
                console.error('Bulk indexing had errors:', JSON.stringify(result.items.filter(item => item.index && item.index.error)));
            }

            return products.length;
        } catch (error) {
            console.error('Error during bulk indexing:', error.message);
            throw error;
        }
    }
};

module.exports = elasticService;
