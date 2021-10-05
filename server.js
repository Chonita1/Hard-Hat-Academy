const express = require('express');
require('dotenv').config()
const expertsController = require('./controllers/expertsController')

// we required express up above now we need to call our app
const app = express();
app.use(express.static('public'))

const mongoose = require('mongoose');
const Occupations = require('./models/occupationalData');
const seedOccupationalData = require('./models/seedOccupationalData');

//this is the db port
const PORT = process.env.PORT || 3001
const SERVER_URL = process.env.SERVER_URL || "localhost:3000"

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

// for ejs templates
app.set('view engine', 'ejs');

app.use('/', expertsController)

app.get('/expertdata', async (req, res) => {
    await Occupations.insertMany(seedOccupationalData)
    res.send('Occupational Data')    
})


app.listen(PORT, () => {
    console.log(`listening at port: ${PORT}`)
})