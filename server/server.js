import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
// Import sequelize from models/index.js which is defined in config/connection.js
import { sequelize } from "./models/index.js";
import routes from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: true }));

app.use(express.static("../client/dist"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

sequelize.sync({ force: false }).then(() => {
  // NOTE: Change to false when you have finalized your models
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
