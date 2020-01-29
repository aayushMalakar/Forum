const router = require("express").Router();
const { registerValidation, loginValidation } = require("../validate");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//IMPORTING USER MODEL
const User = require("../Model/User");

//  REGISTERING USER
router.post("/register", async (req, res) => {
  //VALIDATION CHECK IN THE DATA
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //CHECKING USER DUPLICATION
  const emailExist = await User.findOne({ email: req.body.email });
  const emailExistMsg = {
    emailErrorMsg: "Email already exist"
  };
  res.statusMessage = "Email already exist";
  if (emailExist)
    res
      .status(400)
      .send(emailExistMsg)
      .end();

  //CHECKING PASSWORD AND REPEAT PASSWORD MATCH
  const similarPassword = {
    passwordErrorMsg: "Password doesnt match"
  };
  res.statusMessage = "Password doesnt match";
  if (req.body.password !== req.body.repassword)
    return res
      .status(400)
      .send(similarPassword)
      .end();

  //HASH PASSWORDS
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const hashedrePassword = await bcrypt.hash(req.body.repassword, salt);

  //  CREATE A NEW USER
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    repassword: hashedrePassword
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
    console.log("user added sucessfully");
  } catch (err) {
    res.status(400).send(err);
  }
});

// USER LOGIN
router.post("/login", async (req, res) => {
  // VALIDATION CHECK IN THE DATA
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //CHECKING IF USER EMAIL EXIST
  const user = await User.findOne({ email: req.body.email });
  const noEmail = {
    loginError: "Email or password not found"
  };
  if (!user) return res.send(noEmail);

  //PASSWORD IS CORRECT
  const validPass = await bcrypt.compare(req.body.password, user.password);

  if (!validPass) return res.send(noEmail);

  //CREATE AND ASSIGN A TOKEN
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  const dataToSend = {
    token: token,
    username: user.name,
    id: user._id,
    message: "Login succesfull"
  };
  res.header("auth-token", token).send(dataToSend);
});

router.get("/ayush", async (req, res) => {
  res.status(200).json({ name: "Aayush nibba" });
});

module.exports = router;
