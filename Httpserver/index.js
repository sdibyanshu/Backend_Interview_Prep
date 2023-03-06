const http = require('http');


const server = http.createServer((req, res) => {
 
    if(req.url === "/"){
        return res.end("Welcome to Homepage")
    }
    if (req.url==="/products") {
        return res.end(JSON.stringify([1,2,3,4]))
    }
    if (req.url==="/web") {
        return res.end('<h1 style="color:red;text-align:center">Welcome to Web page here</h1>')
    }
     res.end("Everything end here!"); 
});

server.listen(8080 , () => {
  console.log(`Server running at 8080`);
});