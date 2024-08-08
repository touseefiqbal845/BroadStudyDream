const express = require("express");
const { createUserInformation, getAllUserInformation } = require("../Controllers/UserInformation");

const router = express.Router();

router
  .post("/my-profile",createUserInformation )
  .get("/my-profile",getAllUserInformation)


exports.router = router;
