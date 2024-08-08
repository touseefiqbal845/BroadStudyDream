const express = require("express");
const { createAgent, getAllAgents } = require("../Controllers/Agent");

const router = express.Router();

router
  .post("/agentInfo",createAgent )
  .get("/agentInfo",getAllAgents)


exports.router = router;
