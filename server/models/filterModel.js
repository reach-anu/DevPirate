const { default: mongoose } = require("mongoose");

const filterSchema = new mongoose.Schema({
  name : String,
  subfilters : [String],
})

module.exports = mongoose.model("Filter", filterSchema);
