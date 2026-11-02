
const express = require("express");

const router = express.Router();

const {
    registerUser,
    loginUser,
    logoutUser
} = require("../controllers/userController");

// Register a new user
router.post("/register", registerUser);

// Login an existing user
router.post("/login", loginUser);

// Logout
router.post("/logout", logoutUser);

module.exports = router;
