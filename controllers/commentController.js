// controllers/CommentController.js
const Comment = require('../models/Comment');

exports.createComment = async (req, res, next) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
};

exports.getAllComments = async (req, res, next) => {
  try {
    const comments = await Comment.findAll();
    res.json(comments);
  } catch (error) {
    next(error);
  }
};
