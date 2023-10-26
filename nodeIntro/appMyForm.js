var http = require('http');
var fs = require('fs');

console.log(__dirname); 
function onRequest(req,res)
{
    if(req.url=='/MyForm.html' || req.url=='/'){
    fs.readFile('./MyForm.html', function inner(error,data) {
        if(error){
            res.writeHead(404); 
            res.write('File Not Found'); 
        }
        else{
            res.writeHead(200,{"Content-Type": "text/css"});
            res.writeHead(200, {'Content-Type': 'text/html'}); 
            res.write(data);

        }
        res.end(); 
    }
    );
    }
    else if (req.url == '/MyFormStyle.css') {
        res.setHeader('Content-type', 'text/css');
        res.write(fs.readFileSync('./MyFormStyle.css'));
        res.end();
    }
    else if(req.url =='/MyFormJS.js'){
        res.setHeader('Content-type', 'text/js');
        res.write(fs.readFileSync('./MyFormJS.js'));
        res.end();
    }
    else {
        res.write("invalid request")
        res.end();
    }

}

http.createServer(onRequest).listen(8000); 