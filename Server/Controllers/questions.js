let wyrCall = require('../../api/wouldYouRather.js') //import the would you rather api call 
let triviaCall = require('../../api/trivia.js') //import the trivia api call
let couplesCall = require('../../api/couples_questions.js') //import the couples questions api call

let index = async (req, res, next) => {

    res.render('questions/index', { title: 'Questions', page: 'questions' })
}

let wyr = async (req, res, next) => {

    try{
        let data = await wyrCall()
        let questionReturned = JSON.parse(data)
        let question = questionReturned[0].question 

        res.render('questions/wyr', { title: 'Would You Rather', page: 'wyr', question: question })

    }
    catch(err){
        console.log(err)
        res.status(500).send('An error occurred')
    }

}

let tod = async (req, res, next) => {

    res.render('questions/tod', { title: 'Truth or Dare', page: 'tod' })
}

let trivia = async (req, res, next) => {

    try{
        let data = await triviaCall() //call the trivia api
        let triviaReturned = JSON.parse(data) //parse the data returned from the api
        let category = triviaReturned[0].category //category is the first index
        let question = triviaReturned[0].question //question is the second 
        let answer = triviaReturned[0].answer //answer is the third 

        res.render('questions/trivia', { title: 'Trivia', page: 'trivia', category: category, question: question, answer: answer })

    }
    catch(err){
        console.log(err)
        res.status(500).send('An error occurred') //send an error message if an error occurs
    }
    
        
}

let couplesQuestion = async (req, res, next) => {
                        //.query is used to get the query string from the url (VERY IMPORTANT IN THIS CONTEXT)
    const category = req.query.category //get the category from the form
    try{
        let data = await couplesCall(category) //call the couples questions api
        let questionReturned = JSON.parse(data) //parse the data returned from the api
        let question = questionReturned.text //get the question from the data (under text in the response)

        res.render('questions/couples', { title: 'Couples Questions', page: 'couples', question: question }) //render the couples questions page with the question
    }
    catch(err){
        console.log(err)
        res.status(500).send('An error occurred') //send an error message if an error occurs
    }
}

module.exports = {
    index,
    wyr, 
    tod,
    trivia,
    couplesQuestion 
}   