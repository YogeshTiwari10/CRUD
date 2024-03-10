const express = require('express');
// import bcryt from "bcryptjs";
const router = express.Router();
const User = require('../models/User')
const jwt = require('jsonwebtoken')


router.post("/signups", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ message: "user already existed" });
  }

  // const hashpassword = await bcryt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password,
  });

  await newUser.save();
  return res.json({ status: true, message: "record registed" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ message: "user is not registered" });
  }

  // const validPassword = await bcryt.compare(password, user.password);
  if (!password) {
    return res.json({ message: "password is incorrect" });
  }

  const token = jwt.sign({ username: user.username }, "jwtkey", {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
  return res.json({ status: true, message: "login successfully" });
});


const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false, message: "no token" });
    }
    // const decoded = await jwt.verify(token, "jwtkey");
    next()

  } catch (err) {
    return res.json(err);
  }
};



router.get("/verify", verifyUser, (req, res) => {
  return res.json({ status: true, message: "authorized" })
});

router.get('/logout', (req, res) => {
  res.clearCookie('token')
  return res.json({ status: true })
})

module.exports = router;