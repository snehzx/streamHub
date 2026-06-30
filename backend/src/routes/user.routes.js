import { Router } from "express";
import {
  loginUser,
  logOutUser,
  registerUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateUserAvatar,
  updateUserCoverImage,
  getUserChannelProfile,
  getWatchHistory,
} from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.midleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJwt, logOutUser);
router.route("/refreshToken").post(refreshAccessToken);
router.route("/changePassword").post(verifyJwt, changeCurrentPassword);
router.route("/getCurrentUser").get(verifyJwt, getCurrentUser);
router.route("/updateAccountDetails").patch(verifyJwt, updateAccountDetails);
router
  .route("/avatar")
  .patch(verifyJwt, upload.single("avatar"), updateUserAvatar);
router
  .route("/coverImage")
  .patch(verifyJwt, upload.single("coverImage"), updateUserCoverImage);
router.route("/channel/:username").get(verifyJwt, getUserChannelProfile);
router.route("/watchHistory").get(verifyJwt, getWatchHistory);

export default router;
