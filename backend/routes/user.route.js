import express from "express";
import { login, logOut, register } from "../controllers/user.controller.js";

const router= express.Router();

 router.route("/register").post(register);
 router.route("/login").post(login);
 router.route("/logOut").get(logOut);

 export default router;