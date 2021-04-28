//import module http
const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req, res) => {
    //console.log(req.url, req.method); we don't need anymore

    //lodash methods
    //first method generate random number every time we refresh the web
    const num = _.random(0, 20);
    console.log(num);

    //second method once() run the function only once
    const greet = _.once(() => {
        console.log('hello');
    });
    greet();
    greet();

    //set header
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html'; //if the switch is equal to '/' we add index.html
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;

    }

    //res.write('<p>hello, ninjas<p>');
    //res.write('<p>hello, ninjas2<p>');
    //res.end();

    //send file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            
            res.write(data);
            res.end();
        }
    });


});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
});

