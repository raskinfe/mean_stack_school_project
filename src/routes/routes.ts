import express from "express";
import { UserController } from "../controllers/UserController";
import passport from "passport";
import { storage, upload } from "../config/file_upload";
import { ImageController } from "../controllers/ImageController";
import { PostController } from "../controllers/PostController";
import { MessageController } from "../controllers/MessageController";
import multer from "multer";
import { AdminController } from "../controllers/AdminController";
import { UserIssueController } from "../controllers/UserIssueController";

export const router = express.Router();

/**
 * User routes
 * @param(UserController.registerUser)
 * @param(UserController.authenticate)
 */
router.post("/user/register", UserController.registerUser);
router.post("/user/login", UserController.authenticate);
router.delete(
  "/user/destroy",
  passport.authenticate("jwt", { session: false }),
  UserController.destroy
);
router.get(
  "/user/profile/:id",
  passport.authenticate("jwt", { session: false }),
  UserController.getProfile
);
router.put(
  "/user/update-profile/:id",
  passport.authenticate("jwt", { session: false }),
  UserController.updateProfile
);
router.put(
  "/user/update-password/:id",
  passport.authenticate("jwt", { session: false }),
  UserController.updatePassword
);
router.get("/user/reset-password/:email", UserController.resetPassword);

/**
 * Post routes. post save, get, edit and delete
 */
router.get("/posts", PostController.getPosts);
router.post("/post/save", upload.array("posts"), PostController.store);
router.get("/post/:id", PostController.getPostById);
router.get(
  "/posts/:user_id",
  passport.authenticate("jwt", { session: false }),
  PostController.getPostsByUser
);
router.delete(
  "/post/:id",
  passport.authenticate("jwt", { session: false }),
  PostController.destroy
);
router.put(
  "/post/update/:id",
  passport.authenticate("jwt", { session: false }),
  PostController.updatePost
);
router.put(
  "/post/update-image/:id",
  multer({ storage }).array("posts", 10),
  PostController.uploadMoreImages
);
router.get(
  "/category/get-count",
  passport.authenticate("jwt", { session: false }),
  PostController.getCountByCategory
);

/**
 * Message controller and message routes
 */

router.get(
  "/messages/:id&:sender",
  passport.authenticate("jwt", { session: false }),
  MessageController.getMessages
);

/**
 * Image controller and image urls
 */

/** user profile picture section */
router.post(
  "/user/set-profile/:id",
  upload.single("avatar"),
  ImageController.storeProfileImage
);
router.get("/user/get-profile/:id", ImageController.getProfilePicture);

/** Post images */
router.get("/post/get-post-image/:name", ImageController.getPostImage);

/**
 * Admin section
 */
router.get(
  "/admin/getAllUsers",
  passport.authenticate("jwt", { session: false }),
  AdminController.getUsers
);
router.post("/admin/issues", UserIssueController.store);
router.post(
  "/admin/update-role/:id",
  passport.authenticate("jwt", { session: false }),
  AdminController.updateUserRole
);
