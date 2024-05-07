const express = require("express");
const { createFilter, filters, subfilters } = require("../controllers/filterController");
const router = express.Router();

router.get("/all-filters", filters);
router.post("/create-filter", createFilter);
router.post("/subfilters", subfilters);

module.exports = router;
