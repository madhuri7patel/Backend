const { connection } = require("./config/db.js");
const express = require("express");
const { Registerrouter } = require("./routes/register.js");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Landing page");
});
app.use("/register", Registerrouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("madhuri");
  } catch (err) {
    console.log(err);
  }
});
