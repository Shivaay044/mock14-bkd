const express = require("express")
const quizModel = require("../model/quiz.model")
const auth = require("../middleware/auth.middleware")
const  quizRouter = express.Router()



quizRouter.use(auth)

quizRouter.post("/add",async(req,res)=>{
    try {
        const newQuiz = new quizModel(req.body)
        await newQuiz.save()
        res.status(200).send("quiz added successfully")
    } catch (error) {
        res.status(400).send(error.message)
    }
})



quizRouter.get("/allquiz",async(req,res)=>{
    try {
        const quiz = new quizModel.find()
        res.status(200).send(quiz)
    } catch (error) {
        res.status(400).send(error.message)
    }
})









module.exports = quizRouter