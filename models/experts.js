const mongoose = require('mongoose')


//creates a shorthand for mongoose
const expertsSchema = new mongoose.Schema ({
    name: {type: String, required: true, unique: true},
    profile: {type: String, requied: true},
    occupation: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    zipcode: {type: Number, required: true},
    state: {type: String, required: true},
    url:   {type: String, required: true, unique: true},
})
module.exports = mongoose.model('Experts', expertsSchema)
