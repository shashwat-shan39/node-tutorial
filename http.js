const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('May the 4th be with you!')
    }
    else if(req.url === '/about'){
        res.end('this is the about page');
    }
    else{
        res.end(`<h1>Oops</h1> <p>We can't seem to find the page you are looking for <a href="/">back home</a></p>`);
    }
   
    
})
server.listen(5000);