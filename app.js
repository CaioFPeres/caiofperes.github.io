const fs = require('fs');
const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 3000;

function GETRequest(query, start) {

    let options = {
        hostname: "www.google.com",
        port: 443,
        path: "/search?tbm=isch&q=" + query + "&start=" + start,
        method: 'GET'
    }
    
    
    return new Promise(function(resolve, reject) {
        
        let data = "";

        
        let req = https.request(options, res => {

            res.on("data", datachunk => {
                data = data + datachunk;
            });

            res.on("end", () => {
                resolve(data);
            });
            
            
        });
        

        req.on('error', error => {
            console.error(error)
        });
    

        req.end();

    });

}



const server = http.createServer( async (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const requestUrl = url.parse(req.url);
    let completePath = requestUrl.pathname;
    let path = completePath.split('/').slice(1)[0];

    let fileContent;

    if(path == "")
        path = "index.html";

    try{
        fileContent = fs.readFileSync(path);
        res.end(fileContent, 'utf-8');
    }
    catch(err){
        console.log("File not found: " + path);
        if(path != "favicon.ico"){
            res.statusCode = 404;
            fileContent = fs.readFileSync("404.html");
            res.end(fileContent);
        }
    }


});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});