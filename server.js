const express = require('express');

// we required express up above now we need to call our app
const app = express();
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