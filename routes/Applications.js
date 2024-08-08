const express = require("express");
const { getApplications, createApplication } = require("../Controllers/Applications");

const router = express.Router();

router
  .post("/applications",createApplication )
  .get("/applications/:id",getApplications)


exports.router = router;
