const Products = require("../model/product.model");

exports.getProductSarvises = async () => {
    const products = await Products.find({})
    return products
}
exports.getSarvisesProductById = async (id) => {
    const products = await Products.find({ _id: id })
    return products
}
exports.getProductSarvises = async () => {
    const products = await Products.find({})
    return products
}

exports.createProductSarvices = async (data) => {
    const product = await Products.create(data)
    return product
}