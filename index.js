const server = require('./api/server')


PORT = '7777'

server.listen(PORT, () =>{
    console.log(`server running on ${PORT}`)
})