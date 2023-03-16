const express = require("express")
const app = express();
const port = 3001|process.env.PORT
const hbs = require("hbs")
const bodyParse = require("body-parser")
// const hljs = require('highlight.js');
app.use("/statics",express.static("public"))


// database
require("./model/database")
const Res = require("./model/res");
const Code = require("./model/code")

// engine tempelete
app.set("view engine","hbs")
app.set("views","views")
hbs.registerPartials("views/partials")

app.use(bodyParse.urlencoded({
    extended:true
}))

app.get("/",(req,res)=>{
    res.render("code");
})


//************************* */ code section *****************************

app.get("/code", async(req,res)=>{
    try {
        const data = await Code.find().sort({ _id: -1 })
        res.render("code",{
            data : data
        })
    } catch (error) {
        res.send(error)
    }
    res.render("code");
})

app.post("/code",async(req,res)=>{
    try {
        const data = await Code.create({
            quename : req.body.questionname,
            Question : req.body.question,
            queimage : null,
            Solution : req.body.solution
        })
        data.save();
        res.redirect("code")
    } catch (error) {
        console.log(error)
        res.send(error);
    }
})

app.get("/query",async (req,res)=>{
    try {
        const data = await Res.find();
        res.render("query",{
            data : data
        })
    } catch (error) {
        res.send(error);
    }
})

app.post("/query",async(req,res)=>{
    try {
        const id = req.body.queryid;
        const data =  await Res.findByIdAndDelete(id);
        res.redirect("/query");
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

app.listen(port,()=>{
    console.log(`Server is Running at port ${port}`)
})