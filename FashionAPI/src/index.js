import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import router from "./routes/index.js";
import { testConnection } from "./config/db.js";

const PORT = process.env.PORT || 3000;

app.use("/", router);

app.listen(PORT, async () => {
  await testConnection();
  console.log(`[server] running at http://localhost:${PORT}`);
});
