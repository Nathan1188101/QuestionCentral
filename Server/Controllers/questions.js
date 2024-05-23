let wyrCall = require('../../api/wouldYouRather.js')

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

module.exports = {
    index,
    wyr, 
}