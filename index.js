const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/facebook', (req, res) => {
    res.send('https://www.facebook.com/shakhawat15.bd')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/toutube', (req, res) => {
    res.send('<h2>Chai or code</h2>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})