const productRouter = require("express").Router();
const productController = require("../controllers/product/catalog");

productRouter.post("/product/catalog", productController.getOilCategories);

module.exports = productRouter;