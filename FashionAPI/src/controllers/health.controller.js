import pool from "../config/db.js";

export async function health(req, res) {
  try {
    const [rows] = await pool.query("SELECT NOW() as now");
    res.json({ status: "ok", now: rows[0].now });
  } catch (e) {
    res.status(500).json({ status: "error", message: e.message });
  }
}
