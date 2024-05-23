const http = require('https');

function getTravia(){

return new Promise((resolve, reject) => {

//options for the request 
const options = {
	method: 'GET',
	hostname: 'trivia-by-api-ninjas.p.rapidapi.com',
	port: null,
	path: '/v1/trivia',
	headers: {
		'x-rapidapi-key': '3fa138cd5dmsh688b9edb543c18ap1ab9abjsnb4974b0fd531',
		'x-rapidapi-host': 'trivia-by-api-ninjas.p.rapidapi.com'
	}
};

//make the request 
const req = http.request(options, function (res) {
	const chunks = [];

    //get the data 
	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

    //resolve the promise with the data 
	res.on('end', function () {
		const body = Buffer.concat(chunks);
		//console.log(body.toString());
        resolve(body.toString())
	});
});

//error handling 
req.on('error', function (err) {
    reject(err)
})

req.end();

})

}

module.exports = getTravia; 

