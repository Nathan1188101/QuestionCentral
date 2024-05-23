const { get } = require('http');
const http = require('https');

function getRandomQuestion() {
	//resolve - settles the promise with a successful result and resolves it, this value can the nbe accesed in the .then mehtod of the Promise
	//reject - settles the promise with a failure, and returns the reason for the failure, this value can be accessed in the .catch method of the Promise
	return new Promise((resolve, reject) => {
    const options = {
	    method: 'GET',
	    hostname: 'would-you-rather.p.rapidapi.com',
	    port: null,
	    path: '/wyr/random',
	    headers: {
		    'x-rapidapi-key': '3fa138cd5dmsh688b9edb543c18ap1ab9abjsnb4974b0fd531',
		    'x-rapidapi-host': 'would-you-rather.p.rapidapi.com'
	    }
    };

    const req = http.request(options, function (res) {
	    const chunks = [];

        res.on('data', function (chunk) {
		    chunks.push(chunk);
	    });

	    res.on('end', function () {
		    const body = Buffer.concat(chunks);
		    //console.log(body.toString());
			resolve(body.toString()) //resolve for the promise success handling 
	    });
    }); 
 
    req.on('error', function (err) {
        reject(err) //rejection for the promise error handling 
    })

    req.end();

})

}

module.exports = getRandomQuestion; 