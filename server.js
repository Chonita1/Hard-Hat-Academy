const express = require('express');

// we required express up above now we need to call our app
const app = express();

const mongoose = require('mongoose');
const Experts = require('./models/experts')
const seedExperts = require('./models/seedExperts')

//this is the db port
const PORT = 3000  //process.env.PORT

//Connect to Database
const mongoURI = 'mongodb://localhost/hardhat'  //process.env.MONGODB_URI
const db = mongoose.connection

mongoose.connect(mongoURI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("THE DATABASE IS CONNECTED")
})

    db.on('connected', () => {
        console.log('mongoose connect to', MONGODB_URI);
    })
    
    db.on('disconnect', () => {
        console.log('mongoose disconnected to', MONGODB_URI);
    })
    db.on('error', (error) => {
        console.log('mongoose error', error);
    })

const APPPORT = 3001;


app.get('/', (req, res) => {
    res.send('Welcome to Hard Hat Academy!')
})

app.get('/expertdata', async (req, res) => {
    await Experts.insertMany(seedExperts)
    res.send('Expert Data')    
})



app.listen(APPPORT, () => {
    console.log(`listening at port: ${APPPORT}`)
})