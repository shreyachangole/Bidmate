const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();       // Load .env
connectDB();           // Connect to MongoDB

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
