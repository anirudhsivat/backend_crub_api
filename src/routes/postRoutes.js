
const express = require("express");

const router = express.Router();

const {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost
} = require("../controllers/postController");

// CREATE a post
router.post("/", createPost);

// READ all posts
router.get("/", getAllPosts);

// READ one post
router.get("/:id", getPostById);

// UPDATE a post
router.put("/:id", updatePost);

// DELETE a post
router.delete("/:id", deletePost);

module.exports = router;
