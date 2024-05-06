// controllers/PostController.js
const Post = require('../models/Post');

exports.createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};