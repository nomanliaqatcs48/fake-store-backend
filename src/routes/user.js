const express = require("express");
const router = express.Router();
const user = require("../controllers/user");

router.get("/", user.getAllUser);
router.post("/", user.addUser);
router.get("/:id", user.getUser);

module.exports = router;
