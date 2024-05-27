const http = require('https') //importing the http module

function getRandomCouplesQuestion(){

    return new Promise((resolve, reject) => {

        //put something here for category select? I think we probably start here with variables 

        //options for the request 
        const options = {
            method: 'GET',
            hostname: 'questionsapi-24op.onrender.com',
            port: null,
            path: '/questions/random?category=spicy',

        }

        //make the request
        const req = http.request(options, function (res) {
            const chunks = [] //array to store the data

            //get the data and add to the chunks array
            res.on('data', function (chunk){
                chunks.push(chunk)
            })

            //resolve the promise with the data
            res.on('end', function() {
                const body = Buffer.concat(chunks)
                resolve(body.toString())
            })
        })

        //error handling for promise rejection
        req.on('error', function (err) {
            reject(err)
        })

        req.end() //end the request (this is important, otherwise the request will not be made)

    })

}

module.exports = getRandomCouplesQuestion; //export the function to be used in other files