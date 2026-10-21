import { userValidation } from "../validations/validator.js";

const signUpValidation = async (req, res, next) => {
  const result = userValidation.safeParse(req.body);

  if (!result.success) {
    return res
      .status(400)
      .json({
        message: "The required fields have not been entered correctly.",
      });
  }
  req.userData = result.data;
  next();
};

export default signUpValidation;
