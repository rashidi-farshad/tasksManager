import userModel from "../models/userModel.js";
import mongoose from "mongoose";

const isValidId = async (req, res, next) => {
  let { id } = req.body;
  const isValidUserId = mongoose.isValidObjectId(id);

  if (!isValidUserId) {
    return res.status(400).json({ message: "invalid id" });
  }

  const userId = await userModel.findById(id);
  if (!userId) {
    return res.status(400).json({ message: "This ID does not exist." });
  }
  next();
};
export default isValidId;
