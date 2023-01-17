const express = require('express');
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
        max: 30,
        unique:true,
        trim: true
    },
    img: {
        type: String,
        required: true
    },
    ratting: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        min: 1,
    },
    delPrice: {
        type: Number,
        required: true,
        min:1,
    },
    discription:{
        type:String,
        required:true,
        trim:true,
        min:20
    }
})

const Products = mongoose.model("Product",ProductSchema)

module.exports = Products