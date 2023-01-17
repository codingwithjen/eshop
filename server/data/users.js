/** SEED FILE TO IMPORT FAKE DATA.
 *
 * Sets up an Admin User and a non-Admin User
 * for privateRoutes testing.
 */

import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "user@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
