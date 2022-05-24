//import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: "123456",
    //bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "user@example.com",
    // password: bcrypt.hashSync("123456", 10),
    password: "1234",
  },
];

export default users;
