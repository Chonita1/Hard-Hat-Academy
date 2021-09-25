const express = require('express');

// we required express up above now we need to call our app
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Welcome to Hard Hat Academy!')
})



app.listen(port, () => {
    console.log('listening at port' , port)
})