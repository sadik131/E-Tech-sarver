const productSarvises = require('../sarvises/Product.sarvises');

exports.getProduct = async (req, res, next) => {
    try {
        const result = await productSarvises.getProductSarvises()
        res.status(200).json({
            status: "success",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "faild",
            message: "Couldn't get the products",
            error: error.message
        })
    }
}
exports.getProductById = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await productSarvises.getSarvisesProductById(id)
        res.status(200).json({
            status: "success",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "faild",
            message: "Couldn't find the product",
            error: error.message
        })
    }
}

exports.postProduct = async (req, res, next) => {
    try {
        const product = req.body
        const result = await productSarvises.createProductSarvices(product)
        res.status(200).json({
            status: "success",
            message: "Product insert successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "faild",
            message: "Couldn't insert the product",
            error: error.message
        })
    }
}