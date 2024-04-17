// app.js
const express = require("express");
const app = express();

// Load SampleData model
const SampleData = require("./models/SampleData");

// Route to retrieve data
app.get("/api/data", async (req, res) => {
  try {
    const data = await SampleData.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = app;
