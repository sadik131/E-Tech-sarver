const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const app = require("./index");
// console.log(process.env.MONGODB_CONNECTION)

mongoose.set("strictQuery",true)
mongoose.connect("mongodb://127.0.0.1:27017/ETech").then(()=>{console.log("db connect")}) .catch((err)=>console.log(err));



const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`running on port ${port}`)
})