const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (res) => {
  res.send("Test Response");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//mongoose

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(port, () => {
      console.log("connect db");
    });
  })
  .catch((err) => {
    console.log("db error: ", err);
  });
