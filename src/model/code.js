const mongoose = require("mongoose")

const Code = mongoose.Schema({
    quename : String,
    Question : String,
    queimage : String,
    Solution : String,
})

module.exports = mongoose.model("code",Code)