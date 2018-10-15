const http = require('http')

const port = '8080'

http.createServer( (req, res)=>{

    res.end ('blyat')
}).listen(8080)

console.log(`Listening at ${port}`)