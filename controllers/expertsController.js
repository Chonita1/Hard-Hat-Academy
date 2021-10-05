const { application } = require('express')  // Return to this code. Is it needed?
const express = require('express')
const router = express.Router()
const Occupations = require('../models/occupationalData')
// const seedOccupationalData = require('../models/seedOccupationalData')
const SERVER_URL = process.env.SERVER_URL || "localhost:3000"


//Middlewares

//list/explore all occupations
router.get('/exploreoccupations', (req, res) => {
    try{
         Occupations.find({}, (err, allOccupations) => {
            // ? is equal to if error then output error msg
            err ? res.send(err)
            // : is equal to else...
            : res.render('index.ejs', {
                occupations: allOccupations
            })
        })
    }
    catch (err) {
        res.send(err.message)
    }
})
//show a specific occupation
router.get('/explore/:id', (req, res) => {
    try{
        Occupations.findById(req.params.id, (err, specificOccupation) => {
            err ? res.send(err)
            : res.render('show.ejs', {
                specificOccupationalData: specificOccupation,
                serverUrl: SERVER_URL
            })
        })
    }
    catch (err) {
        res.send(err.message)
    }
})
//create a new occupation
router.post('/createoccupation', async (req, res) => {
    res.render('new.ejs', {
    })
})
//edit an occupation //are editing an occupation and updating an occupation the same thing?
router.get('/editoccupation/:id', async (req, res) => {
    try{
        Occupations.findById(req.params.id, (err, specificOccupation) => {
            err ? res.send(err)
            : res.render('edit.ejs', {
                specificOccupationalData: specificOccupation
            })
        })
    }
    catch (err) {
        res.send(err.message)
    }
})
//update an occupation //are updating an occupation and editing an occupation the same thing?
router.put('/updateoccupation/:id', async (req, res) => {
    res.render('edit.ejs', {
        specificoccupationaldata: allOccupations[req.params.id],
        experts: allExperts[req.params.id],
    })
})
//delete an occupation
router.delete('/removeoccupation/:id', async (req, res) => {
    res.render('delete.ejs', {
        specificoccupationaldata: allOccupations[req.params.id],
        experts: allExperts[req.params.id],
    })
})




// app.get('//:indexOfFruitsArray',(req, res){
//     res.render('show.ejs');

// });


module.exports = router 