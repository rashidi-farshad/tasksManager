import userModel from "../models/userModel.js";

export const signUpUser = async (req, res) => {
  const user = await userModel.create(req.userData);
  res.status(201).send(user);
};
