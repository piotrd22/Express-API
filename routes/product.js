const router = require("express").Router();
const productController = require("../controllers/productController");

router.get("/", productController.getProducts);

router.post("/", productController.addProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

router.get("/state", productController.storeState);

module.exports = router;
