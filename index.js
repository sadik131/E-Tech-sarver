const express = require('express');
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
 
// meddelwar
app.use(express.json())
app.use(cors())
 
// route
const productRoute = require("./route/Product.route")

app.get("/" , (req , res) =>{
    res.send("Route is running")
})

app.use("/api/v1/products",productRoute)
 
module.exports = app;