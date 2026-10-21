import userModel from "../models/userModel.js";

const isAdmin = async (req, res, next) => {
  let { id } = req.body;
  const isValidUser = await userModel.findOne({
    _id: id,
    role: "ADMIN",
  });

  if (!isValidUser) {
    return res.status(400).json({ message: "you dont have access..." });
  }
  next();
};

export default isAdmin;
