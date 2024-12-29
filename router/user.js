const { register, login, sessionData, logout } = require("../controller/user");
const express = require("express");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/session", sessionData);
router.post("/logout", logout);

module.exports = router;
