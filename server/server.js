require('dotenv').config()
const express = require('express');
const path = require('path')
const cors = require('cors')
const app = express()
const {getWords} = require('./controller.js')

//const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')


app.use(cors())
app.use(express.json())

app.post('/seed', seed)
app.get('/words', getWords)


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.use(express.static('public'))

//app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))

const port = process.env.PORT || 4000

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})