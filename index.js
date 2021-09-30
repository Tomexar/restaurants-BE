const server = require('./api/server')


var PORT = process.env.PORT || 7777;

server.listen(PORT, () =>{
    console.log(`server running on ${PORT}`)
})