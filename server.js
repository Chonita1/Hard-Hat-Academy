const express = require('express');
require('dotenv').config()

// we required express up above now we need to call our app
const app = express();

const mongoose = require('mongoose');
const Experts = require('./models/experts')
const seedExperts = require('./models/seedExperts')

//this is the db port
const PORT = process.env.PORT || 3001

//Connect to Database
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/hardhat'  //process.env.MONGODB_URI
const db = mongoose.connection

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("THE DATABASE IS CONNECTED")
})

    db.on('connected', () => {
        console.log('mongoose connect to', process.env.MONGODB_URI);
    })
    
    db.on('disconnect', () => {
        console.log('mongoose disconnected to', MONGODB_URI);
    })
    db.on('error', (error) => {
        console.log('mongoose error', error);
    })



app.get('/', (req, res) => {
    res.send('Welcome to Hard Hat Academy!')
})

app.get('/expertdata', async (req, res) => {
    await Experts.insertMany(seedExperts)
    res.send('Expert Data')    
})



app.listen(PORT, () => {
    console.log(`listening at port: ${PORT}`)
})