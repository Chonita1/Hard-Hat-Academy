// const { application } = require('express') Return to this code. Is it needed?
const express = require('express')
const router = express.Router()
const Occupations = require('../models/occupationalData')
// const seedOccupationalData = require('../models/seedOccupationalData')
const SERVER_URL = process.env.SERVER_URL || "localhost:3000"

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
router.post('/createoccupation', (req, res) => {
    try{
        Occupations.insertOne(
            {
                title: req.body.title,
                description: req.body.description,
                training: req.body.training,
                wage: req.body.wage,
                videoUrl: req.body.videoUrl,
                
                expert: {
                        name: req.body.name,
                        occupation: req.body.occupation,
                        profile: req.body.profile,
                        pictureUrl: req.body.pictureurl,
                        email: req.body.email,
                        phone: req.body.phone,
                        zipcode: req.body.zipcode,
                        state: req.body.state
                }
            },
            (err, specificOccupation) => {
                err ? res.send(err)
                : res.redirect('/exploreoccupations')
            })
        
    }
    catch (err) {
        res.send(err.message)
    }    
})

//edit an occupation //are editing an occupation and updating an occupation the same thing?
router.get('/editoccupation/:id', (req, res) => {
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
router.put('/updateoccupation/:id', (req, res) => {
    // console.log(req.body)
    //res.send("done")
    try {
        Occupations.findByIdAndUpdate(req.params.id,
            {
                title: req.body.title,
                description: req.body.description,
                training: req.body.training,
                wage: req.body.wage,
                videoUrl: req.body.videoUrl,
                
                expert: {
                        name: req.body.name,
                        occupation: req.body.occupation,
                        profile: req.body.profile,
                        pictureUrl: req.body.pictureurl,
                        email: req.body.email,
                        phone: req.body.phone,
                        zipcode: req.body.zipcode,
                        state: req.body.state
                }
            },  {new:true},
                (err, specificOccupation) => {
                err ? res.send(err)
                : res.redirect('/explore/' + req.params.id)
            })    
    }
    catch (err) {
        res.send(err.message)
    }
})
//delete an occupation
router.delete('/removeoccupation/:id', async (req, res) => {
    res.render('delete.ejs', {
        specificoccupationaldata: allOccupations[req.params.id],
        experts: allExperts[req.params.id],
    })
})



module.exports = router 