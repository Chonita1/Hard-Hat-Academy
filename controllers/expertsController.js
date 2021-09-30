const { application } = require('express')  // Return to this code. Is it needed?
const express = require('express')
const router = express.Router()
const Occupations = require('../models/OccuationalData')
const seedOccupationalData = require('../models/seedOccupationalData')
const Experts = require('../models/experts')
const seedExperts = require('../models/seedExperts')


//Middlewares

//list all occupations
router.get('/exploreoccupations', async (req, res) => {
    res.render('index.ejs', {
        occupations: seedOccupationalData,
        experts: seedExperts,
    })
})
//show a specific occupation
router.get('/explore/:id', async (req, res) => {
    res.render('show.ejs', {
        specificoccupationaldata: seedOccupationalData[req.params.id],
        experts: seedExperts[req.params.id],
    })
})
//create a new occupation
router.get('/createoccupation', async (req, res) => {
    res.render('new.ejs', {
    })
})
//edit an occupation
router.get('/editoccupation/:id', async (req, res) => {
    res.render('edit.ejs', {
        specificoccupationaldata: seeOccupationalData[req.params.id],
    })
})
//update an occupation
router.put('/updateoccupation/:id', async (req, res) => {
    res.render('edit.ejs')//AM I REFERENCING THE RIGHT FILE?

})
//delete an occupation
router.delete('/removeoccupation', async (req, res) => {
    res.render('delete.ejs')//I ADDED THIS EJS ROUTE
})

// for ejs templates
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index',{welcome: "Hard Hat Academy",title:"homepage"});
});

// app.get('//:indexOfFruitsArray',(req, res){
//     res.render('show.ejs');

// });


module.exports = router 