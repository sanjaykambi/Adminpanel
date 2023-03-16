const mongoose = require("mongoose")
const db = "mongodb://localhost:27017/bishu"
mongoose.connect(db,{
    useNewUrlParser :true,
}).then(()=>{
    console.log("Connection Successfull")
}).catch(()=>{
    console.log("No connection")
})