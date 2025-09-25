import pool from "../config/db.js";

export async function listUsers(req, res) {
  try {
    const [rows] = await pool.query("SELECT id, lastName, phonenumber FROM users LIMIT 20");
    res.json(rows);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
