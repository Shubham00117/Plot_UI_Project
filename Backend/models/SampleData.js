const mongoose = require("mongoose");

const SampleDataSchema = new mongoose.Schema({
  ts: {
    type: Date,
    required: true,
  },
  machine_status: {
    type: Number,
    required: true,
  },
  vibration: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("SampleData", SampleDataSchema);
