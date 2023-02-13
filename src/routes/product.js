const express = require("express");
const router = express.Router();
const product = require("../controllers/product");

router.get("/", product.getAllProducts);
router.get("/:id", product.getProduct);
router.post("/", product.addProduct);
router.delete("/:id", product.deleteProduct);
router.patch("/:id", product.updateProduct);
router.put("/:id", product.updateProduct);

module.exports = router;
