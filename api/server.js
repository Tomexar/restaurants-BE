const express = require('express')
const server = express()

server.use(express.json())


const restRouter = require('../hubs/restRouter');

server.get('/', (req, res)=>{
    res.send("<h1>Resturants</h>")
})

server.use('/api', restRouter)

module.exports = server