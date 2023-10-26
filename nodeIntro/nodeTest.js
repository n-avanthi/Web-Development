const fs = require('fs');
const http = require('http');
const url = require('url');

function form(req, res){
    if(req.url == '/MyForm.html' || req.url == '/')
    {
        fs.readFile('./MyForm.html', function callBack(error, data){
            if(error)
            {
                res.writeHead(404); 
                res.end("Error");
            }
            else
            {
                res.writeHead(200,{'Content-type':'text/html'});
                res.write(data);
                res.end();
            }
        });
    }
    else if(req.url == '/MyFormStyle.css')
    {
        fs.readFile('./MyFormStyle.css', function callBack(error, data)
        {
            if(error)
            {
                res.writeHead(404);
                res.end("Error");
            }
            else
            {
                res.writeHead(200, {'Content-type':'text/css'});
                res.write(data);
                res.end();
            }
        });
    }
    else if(req.url == '/MyFormJS.js')
    {
        fs.readFile('./MyFormJS.js', function callBack(error, data)
        {
            if(error)
            {
                res.writeHead(404);
                res.end("Error");
            }
            else
            {
                res.writeHead(200, {'Content-type':'text/js'});
                res.write(data);
                res.end();
            }
        });
    }
    else
    {
        res.writeHead(404);
        res.end("Error");
    }
}

http.createServer(form).listen(4000);