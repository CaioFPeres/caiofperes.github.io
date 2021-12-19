const fs = require('fs');
const https = require('http');

const hostname = 'localhost';
const port = 3000;


const server = https.createServer( async (req, res) => {

    res.statusCode = 200;
    let root = "./build";

    let path = root + req.url;

    let fileContent;

    if(path == root + "/")
        path = path + "index.html";

    try{
        fileContent = fs.readFileSync(path);
        res.end(fileContent, 'utf-8');
    }
    catch(err){
        if(req.url != "/favicon.ico"){
            fileContent = fs.readFileSync(root + "/index.html");
            res.end(fileContent);
        }
    }

});

server.listen(port, hostname, () => {
    console.log("Server listening on " + port);
});