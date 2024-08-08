const express = require("express");
const {createUniversity  ,getUniversities } = require("../Controllers/University");

const router = express.Router();

router
  .post("/university",createUniversity )
  .get("/university",getUniversities)


exports.router = router;
