// index.js
const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/sampledata", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
