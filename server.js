const express = require('express');

// we required express up above now we need to call our app
const app = express();

const mongoose = require('mongoose');
const Experts = require('../models/experts')

const mongoURI = 'mongodb://localhost:3000' + 'experts'
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

const PORT = 3000;


app.get('/', (req, res) => {
    res.send('Welcome to Hard Hat Academy!')
})

app.get('/expertdata', (req, res) => {
    res.send("Expert Data")
})



app.listen(PORT, () => {
    console.log(`listening at port: ${PORT}`)
})