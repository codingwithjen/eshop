import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

/** Returns signed JWT from user data. */

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;

