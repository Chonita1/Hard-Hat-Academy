const { application } = require('express')
const express = require('express')
const router = express.Router()
const Experts = require('../models/experts')
const seedExperts = require('../models/seedExperts')


//Middlewares

//list of all occupations
router.get('/exploreoccupations', async (req, res) => {
    
})

//show a specific occupation
router.get('/explore/:id', async (req, res) => {

})

//edit an occupation
router.get('/editoccupation/:id', async (req, res) => {

})

//update an occupation
router.put('/updateoccupation/:id', async (req, res) => {

})

//create a new occupation
router.get('/createoccupation', async (req, res) => {

})


//delete an occupation
router.delete('/removeoccupation', async (req, res) => {

})

// do I need this one?
// router.put('/saveoccupation/', async (req, res) => {

// })






module.exports = router 