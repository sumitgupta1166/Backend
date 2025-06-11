import { Router } from "express";
import { 
    changeCurrentPassword, 
    getCurrentuser, 
    getUserChannelProfile, 
    getWatchHistory, 
    loginUser, 
    logoutUser, 
    refreshAccessToken, 
    registerUser, 
    updateAccountDetails, 
    updateUserAvatar, 
    updateUserCoverImage 
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount:1
        },
        {
            name: "coverImage",
            maxCount:1
        }
    ]),
    registerUser
)

router.route("/login").post(loginUser)

//secured Routes
router.route("/logout").post(verifyJWT, logoutUser)

router.route("/refresh-token").post(refreshAccessToken)

//change password
router.route("/change-password").post(verifyJWT,changeCurrentPassword)

//current user
router.route("/current-user").post(verifyJWT,getCurrentuser)

//update account details
router.route("/update-account").patch(verifyJWT,updateAccountDetails)

//update avatar image
router.route("/avatar").patch(verifyJWT,upload.single("avatar"), updateUserAvatar)

//update cover image
router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"),updateUserCoverImage)

//get channel profile
router.route("/c/:username").get(verifyJWT,getUserChannelProfile)

//get user watchHistory
router.route("/history").get(verifyJWT,getWatchHistory)
export default router