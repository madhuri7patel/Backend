const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  Name: { type: String, require: true },
  Email: { type: String, require: true },
  Password: { type: String, require: true },
});

const RegisterModel = mongoose.model("user", RegisterSchema);
module.exports = {
  RegisterModel,
};
