const filterModel = require("../models/filterModel");

const filters = async (req, res) => {
  try {
    const filters = await filterModel.find({}, { name: 1, _id: 0 });

    return res.send({ success: true, data: filters.map((filter)=> filter.name) });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: "There was some error in fetching filters",
      error: error.message
    });
  }
};

const createFilter = async (req, res) => {
  try {
    if (!req.body.filter || !req.body.subfilters?.length) {
      return res.status(400).send({
        success: false,
        message: "Filter is not defined properly",
      });
    }

    await filterModel.create({
      name: req.body.filter,
      subfilters: req.body.subfilters,
    });

    return res.send({ success: true, message: "Filter created successfully" });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: "There was some error in creating filter",
    });
  }
};

const subfilters = async (req, res) => {
  try {
    if (!req.body.filter) {
      return res.status(400).send({
        success: false,
        message: "Filter is not defined",
      });
    }
    const filter = await filterModel.findOne({ name: req.body.filter });

    return res.send({ status: true, data: filter.subfilters });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: "There was some error in fetching subfilters",
    });
  }
};

module.exports = { filters, subfilters, createFilter };
