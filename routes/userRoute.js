import express from "express";
const userRoute = express.Router();
import signUpValidation from "../middlewares/signUpValidation.js";
import * as userController from "../controllers/userController.js";

userRoute.post("/", signUpValidation, userController.signUpUser);

export default userRoute;
