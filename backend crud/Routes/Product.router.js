const express = require("express");

const router = express.Router();

const controller = require("../Controller/Product.controller");

router.post("/" , controller.productAddFunc)
router.get("/" ,controller.getProductFunc)
router.get('/:id', controller.singleProduct)
router.patch('/:id', controller.productUpdateFunc)
router.delete('/:id', controller.productDeleteFunc)


module.exports = router





