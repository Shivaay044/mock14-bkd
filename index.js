const express = require("express")
const app = express()
const cors = require("cors")
const connection = require("./config/db")
const userRouter = require("./routes/user.route")
const quizRouter = require("./routes/quiz.route")
require("dotenv").config()


app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("hello")
})



app.use("/user",userRouter)
app.use("/quiz",quizRouter)




app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
       console.log(error.message) 
    }
    console.log(`server is running at ${process.env.PORT}`)
})