const express = require('express')
const server = express()
const cors = require('cors')

server.use(cors())
server.use(express.json())


const restRouter = require('../hubs/restRouter');

server.get('/', (req, res)=>{
    res.send("<h1>Restaurants</h>")
})

server.use('/api', restRouter)

module.exports = server