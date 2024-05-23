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



module.exports = router; 



