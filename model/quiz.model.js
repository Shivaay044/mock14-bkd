const mongoose = require("mongoose")



const quizSchema = mongoose.Schema({
   creator:String,
   title:String,
   description:String,
   question:Array
},{
    versionKey:false
})



const quizModel = mongoose.model("quiz",quizSchema)

module.exports = quizModel