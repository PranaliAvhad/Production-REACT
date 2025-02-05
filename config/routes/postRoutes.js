const express = require("express");
const { requireSignIn } = require("../controller/userController");
const {
  createPostController,
  getAllPostsController,
  getUserPostsController,
  deletePostController,
  updatePostController
} = require("../controller/postController");

//router object
const router = express.Router();

//create post || post
router.post("/create-post", requireSignIn, createPostController);

//GET All post
router.get("/get-all-posts", getAllPostsController);

//GET User post
router.get("/get-user-posts", requireSignIn, getUserPostsController);

//Delete post
router.delete('/delete-post/:id', requireSignIn, deletePostController);

//Update post
router.put('/update-post/:id', requireSignIn, updatePostController);

//export
module.exports = router;
