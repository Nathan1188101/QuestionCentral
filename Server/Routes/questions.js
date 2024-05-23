const express = require('express')
const router = express.Router() 
const questionsController = require('../Controllers/questions') //questions controller 

//GET /default page where you can select a category  
router.get('/', (req, res, next) => {
    questionsController.index(req, res, next)
})

//GET /would you rather page 
router.get('/wyr', (req, res, next) => {
    questionsController.wyr(req, res, next)
})

//GET /truth or dare page
router.get('/tod', (req, res, next) => {
    questionsController.tod(req, res, next)
})

//GET /trivia page
router.get('/trivia', (req, res, next) => {
    questionsController.trivia(req, res, next) 
})

module.exports = router; 



