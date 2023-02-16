// const express = require("express");
// const router = express.Router();
// const user = require("../controllers/user");

// router.get("/", user.getAllUser);
// router.post("/", user.addUser);
// router.get("/:id", user.getUser);
// router.delete("/:id", user.deleteUser);
// router.patch("/:id", user.updateUser);
// router.put("/:id", user.updateUser);

// module.exports = router;

import { Router } from "express";
// const router = express.Router();
const router = Router();
import UserModel from "../models/user.js";
import UserController from "../controllers/test.js";
// const AppController = require("../controllers/app");

const user = new UserController(UserModel);

router.route("/users").post(user.userCreate);

export default router;
