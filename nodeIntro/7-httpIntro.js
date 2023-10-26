const http = require('http')
const server = http.createServer((req, res) => { 
    /* Very first Program - Write below two 
    res.write('Welcome to our Home Page')
    res.end() */

    //console.log(req); Very verbose output. req is a very big object 
    if(req.url == '/Home')
    res.end('Welcome to our Home Page')
    else if(req.url == '/About')
    res.end('This is our About Page') 
    else
    res.end(`<br><br><h1>Oops!</h1><p>We cant find the page you searched</p>`)
    
})

server.listen(3000)