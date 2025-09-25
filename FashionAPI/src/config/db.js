import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

export async function testConnection() {
  try {
    const [rows] = await pool.query("SELECT 1+1 AS result");
    console.log("[db] ok:", rows[0].result);
  } catch (err) {
    console.error("[db] failed:", err.message);
  }
}

export default pool;
