import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true,
  },
  username: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true,
  },
  email: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true,
  },
  password: {
    type: String,
    minLength: 5,
    required: true,
  },
  role: {
    type: String,
    default: "USER",
  },
});

const User = mongoose.model("users", userSchema);
export default User;
