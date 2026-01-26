import elasticService from '../services/elasticService';
import db from '../models/index';

let elasticController = {
    syncData: async (req, res) => {
        try {
            // 1. Check connection
            const isConnected = await elasticService.checkConnection();
            if (!isConnected) {
                return res.status(500).json({
                    errCode: 1,
                    message: "Cannot connect to Elasticsearch. Please make sure it is running."
                });
            }

            // 2. Ensure Index exists
            await elasticService.createIndex();

            // 3. Fetch data from MySQL
            const products = await db.Product.findAll({
                include: [
                    { model: db.Allcode, as: 'brandData', attributes: ['value', 'code'] },
                    { model: db.Allcode, as: 'categoryData', attributes: ['value', 'code'] }
                ],
                raw: true,
                nest: true
            });

            if (!products || products.length === 0) {
                return res.status(200).json({
                    errCode: 0,
                    message: "No products to sync."
                });
            }

            // 4. Send to Elastic
            await elasticService.bulkIndexProducts(products);

            return res.status(200).json({
                errCode: 0,
                message: `Synced ${products.length} products to Elasticsearch successfully.`,
                count: products.length
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                errCode: -1,
                message: "Error during synchronization",
                error: error.message
            });
        }
    }
};

module.exports = elasticController;
