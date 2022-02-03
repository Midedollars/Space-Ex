const express = require("express");
const users = require("../controllers/users.controller");

const router = express.Router();

router.post("/add-users", users.addUsers);

module.exports = router;
