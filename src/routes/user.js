const express = require("express");
const router = express.Router();
const user = require("../controllers/user");

router.get("/", user.getAllUser);
router.post("/", user.addUser);
router.get("/:id", user.getUser);
router.delete("/:id", user.deleteUser);
router.patch("/:id", user.updateUser);
router.put("/:id", user.updateUser);

module.exports = router;
