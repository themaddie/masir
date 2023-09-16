import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
// CONFIGURATIONS
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
// BODY
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`PORT: ${PORT}`);
});
