const { Router } = require("express");
const { RegisterModel } = require("../models/register.model");
//const { router } = express();
const Registerrouter = Router();
const bcrypt = require("bcrypt");

// Registerrouter.get("/", (req, res) => {
//   res.send("Welcome to Landing Page");
// });

Registerrouter.post("/", (req, res) => {
  try {
    let { Name, Email, Password } = req.body;
    bcrypt.hash(Password, 6, async function (err, hash) {
      // Store hash in your password DB.
      //console.log(hash);

      let newuser = new RegisterModel({ Name, Email, Password: hash });
      await newuser.save();
      res.send({ message: "Register Success" });
    });
  } catch (err) {
    console.log(err);
  }
});

Registerrouter.post("/login", async (req, res) => {
  try {
    let { Email, Password } = req.body;
    let user = await RegisterModel.findOne({ Email });
    //console.log(user);
    //res.send(user);
    let hash = user.Password;
    bcrypt.compare(Password, hash, async function (err, result) {
      if (result) {
        res.status(200).send({ message: "login sucessfull" });
      } else {
        res.status(500).send({
          error: "Login failed",
        });
      }
    });
  } catch (err) {
    //console.log(err);
    res.status(500).send({
      error: "Login failed",
    });
  }
});

module.exports = { Registerrouter };
