const express = require('express');
const router = express.Router()
const prodcutControler = require('../controler/Product.controler');

router.route("/:id")
.get(prodcutControler.getProductById)
router.route("/")
.get(prodcutControler.getProduct)
.post(prodcutControler.postProduct)
module.exports = router