/** Convenience middleware to handle common auth cases in routes. */

import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";

/** Middleware: Authenticate user.
 *
 * If a token was provided, verify it, and, if valid, store the token
 * payload on res.locals (this will include the username and isAdmin field).
 *
 * It's not an error if no token was provided or if the token is not valid.
 */

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized. Token failed.");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized. No token provided.");
  }
});

export default protect;
