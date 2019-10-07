//Call HTTP from core library 
const http = require('http');
//Fs module allows us to work with the file system
const fs = require('fs')
//Call create server method to init the server 
//...with a request and response funtion to handle request and responses
const server = http.createServer((req, res) => {
    //You can specifies data based on the request parameters
    //with the req.url method
    const url = req.url;
    if(url === '/') {
        res.write(`<h1>This is a home page</h1>`);
        //We then end the request after the h1 is loaded itnto the page
        return res.end();
    }
    //We can parse the method 
    const method = url.method;
   if (url === '/message' && method === 'POST') {
    const body = [];
    //add a listener that receives the chunk/data to handle it
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  } 
    //The request object is created by nodejs with the request 
    //information about the request as methods
    console.log(req.url);
    console.log(req.headers);
    console.log(req.url);
    //The response object carry too a lot of methods for the response
    //for us sending back
    console.log(res.setHeader('Content-Type', 'text/html'));
    console.log(res.write("This is a response"));
    //You can also write html in the response method
    res.write(`<h1>This is a response</h1>`);
    //Quit the process when the request is received
    //process.exit();
});
//Specifies the port in which the sever will run 
server.listen(3000, () => console.log('The sever is running on port 3000'))
//Keep running as long asthere are event listeners registered