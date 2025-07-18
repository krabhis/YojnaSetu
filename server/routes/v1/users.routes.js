import { signUp, login, logout, refreshAccessToken, getMe, putData } from "../../controller/user.controller.js";
import express from "express";
import { verifyJWT } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", verifyJWT, logout);
router.get("/refresh-access-token", refreshAccessToken);
router.get("/getme", verifyJWT, getMe);
router.post("/putdata", verifyJWT, putData);


export default router;