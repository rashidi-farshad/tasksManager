import userModel from "../models/userModel.js";

export const signUpUser = async (req, res) => {
  const user = await userModel.create(req.userData);
  res.status(201).send(user);
};

export const getAllUsers = async (req, res) => {
  const users = await userModel.find();
  res.status(200).send(users);
};
