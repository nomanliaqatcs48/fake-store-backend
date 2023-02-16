import mongoose from "mongoose";
import express from "express";
// import user from "./src/routes/user";
import user from "./src/routes/user.js";
// const productRoute = require("./src/routes/product");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (res) => {
  res.send("Test Response");
});

// app.use("/users", userRoute);
app.use(user);
// app.use("/products", productRoute);

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

export default app;
