const mongoose = require("mongoose");
const express = require("express");
const userRoute = require("./src/routes/user");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (res) => {
  res.send("Test Response");
});

app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//mongoose

mongoose
  .connect("mongodb://localhost:27017/store", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // app.listen(port, () => {
    console.log("connect db");
    // });
  })
  .catch((err) => {
    console.log("db error: ", err);
  });

module.exports = app;
