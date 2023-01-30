const express = require("express");
const app = express();
const port = 3000;

app.get("/", (res) => {
  res.send("Test Response");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
