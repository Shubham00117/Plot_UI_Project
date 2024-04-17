const SampleData = require("../models/sampleDataModel");

exports.getAllData = async (req, res) => {
  try {
    const data = await SampleData.find({});
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
