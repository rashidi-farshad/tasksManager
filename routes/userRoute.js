import express from "express";
const userRoute = express.Router();
import signUpValidation from "../middlewares/signUpValidation.js";
import isAdmin from "../middlewares/isAdmin.js";
import isValidId from "../middlewares/validId.js";
import * as userController from "../controllers/userController.js";

userRoute.post("/", signUpValidation, userController.signUpUser);
userRoute.get("/", isValidId, isAdmin, userController.getAllUsers);

export default userRoute;
