import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middleware/AuthMiddleware.js";
import generateToken from "../utils/generateToken.js";
import User from "./../Models/UserModel.js";

const userRouter = express.Router();

/** USER LOGIN.
 *
 * Authenticate user with email, password.
 *
 * Throws UnauthorizedError is user not found
 * or wrong password.
*/

userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("Invalid email address and/or password. Please try again!");
    }
  })
);

/** REGISTRATION.
 *
 * Returns { name, email, isAdmin }
 *
 * Throws BadRequestError on duplicates.
 */

userRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("Looks like email address is already registered! Please try different credentials.");
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user credentials.");
    }
  })
);

/** USER PROFILE.
 * Given an email, return data about user.
 *
 * Returns { id, name, email, is_admin, orders }
 *
 * Throws NotFoundError if user not found.
 */

userRouter.get(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("Email address/user not found. Please try again.");
    }
  })
);

/** UPDATE USER PROFILE.
 *
 * This is a "partial update" -- it's fine if data doesn't contain
 * all the fields; this only changes provided ones.
 *
 * Data can include: { name, email, isAdmin }.
 * Throws NotFoundError if not found.
 *
 * WARNING: this function can set a new password or make a user an admin.
 * Callers of this function must be certain they have validated inputs to this
 * or a serious security risks are opened. */

userRouter.put(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        createdAt: updatedUser.createdAt,
        token: generateToken(updatedUser._id),
      });
    } else {
      res.status(404);
      throw new Error("User not found, please try again.");
    }
  })
);

export default userRouter;
