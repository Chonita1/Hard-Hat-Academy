//occupational Details
// Occu Name
// Occu Descrip
// Training Required
// Averge Wage/Salary
// Job Growth Trend 

const mongoose = require('mongoose') // I DON'T WRITE THIS AGAIN, DO I?

//creates a shorthand for mongoose
// created the occupational schema for occupational title,training required, avg wage, 
//and job growth trend. 
const occupationalDataSchema = new mongoose.Schema ({
    title: {type: String, required: true, unique: true},
    description: {type: String, requied: true},
    training: {type: String, required: true},
    wage: {type: String, required: true, unique: true},
    trend: {type: String, required: true, unique: true},
    url:   {type: String, required: true, unique: true}
},
{ collection: 'Occupations'}
)
module.exports = mongoose.model('Occupations', occupationsSchema)
