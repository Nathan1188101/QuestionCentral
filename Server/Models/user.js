const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')
const findOrCreate = require('mongoose-findorcreate')

//define schema for User object 
let userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String, 
        minLength: 8
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    }
}) 

//configure options for user schema
userSchema.plugin(plm) //need this for the createStrategy() method that we called in the app.js in Config folder 
userSchema.plugin(findOrCreate)

let User = mongoose.model('User', userSchema)
module.exports = User; 