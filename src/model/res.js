const mongoose = require("mongoose")

const Res = mongoose.Schema({
    username : String,
    useremail : String,
    query : String
})

module.exports = mongoose.model("res",Res)