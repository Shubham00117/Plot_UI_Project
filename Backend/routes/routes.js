const express = require("express");
const router = express.Router();
const SampleDataController = require("../controllers/sampleDataController");

router.get("/data", SampleDataController.getAllData);

module.exports = router;
