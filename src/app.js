
const express = require("express");
const cors = require("cors");

const app = express();

// Import routes
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Backend CRUD API is running!"
    });
});

// Post routes
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
