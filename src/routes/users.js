const express = require("express");
const router = express.Router();
const getUser = require("../controllers/users");

router.get("/", getUser);

module.exports = router;;