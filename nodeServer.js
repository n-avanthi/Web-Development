const fs = require('fs');
const http = require('http');
const url = require('url');
http.createServer(callMe).listen(4000);
function callMe(req, res){
    if(req.url == '/')
    {
       // res.write("Hello");
        fs.readFile('./form.html', function callBack(error, data){
            if(error)
            {
                res.writeHead(404);
                res.end("Error");
            }
            else
            {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        });
    }
    else if(req.url.indexOf('/mystery')!=-1)
    {
       const urlData = url.parse(req.url, true)

        console.log(req.query)
        console.log(urlData)
        console.log('Username:' + urlData.query.txtname)
        res.write('Username : ' + urlData.query.txtname+ ',')
        res.write('Password : ' + urlData.query.txtpwd + ',')
        res.end("Mystery");
    }
    else
    {
        res.end("Error");
    }
}