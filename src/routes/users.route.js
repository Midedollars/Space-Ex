const express = require("express");
const users = require("../controllers/users.controllers");

const router = express.Router();

router.post("/addUser", users.addUsers);
router.get("/countUsers", users.countUsers);

module.exports = router;
