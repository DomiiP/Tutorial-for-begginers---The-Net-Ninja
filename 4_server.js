var http = require('http'); 
if(false){
var server = http.createServer(function(req,res){
    //req  (request) - has details about requst that was made
    //res (response) - send response back to the client
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content.Type': 'text/plain'});
    res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1'); // 3000 - Port that we listen to, second is IP address
console.log('yo, now listen to port 3000');}

// ---- End of Video 12 (Creating a Server)

// Writable streams - allow node to write data to a stream
// Readable streams - allow node to read data from a stream
// Duplex - can read and write to a stream
var fs = require('fs');
if(false){
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); //__dirname - get your current directory
//utf8 encoding means we will get back chunk's in text rather then in numbers
myReadStream.on('data', function(chunk){ //.on method listens to myReadStream
    //We read the file, it fills the buffer, passes chunk of data on and it fires the function
    console.log('new chunk recieved:' + chunk);
});}

// ---- End of Video 14 (Readable Streams)

if(false){
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
myReadStream.on('data', function(chunk){ 
    console.log('new chunk recieved');
    myWriteStream.write(chunk);
});}

// ---- End of Video 15 (Writable Streams)

//myReadStream.pipe(myWriteStream);

if(false){
var server = http.createServer(function(req,res){ // res (response object) is a writable stream
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content.Type': 'text/html'}); 
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res); //pipe is streaming data bit by bit
});

server.listen(3000, '127.0.0.1'); 
console.log('yo, now listen to port 3000');}

// ---- End of Video 16 (Pipes)

//changed text-file from text/plain to text/html

// ---- End of Video 17 (Serving HTML Pages)
if(false){
var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content.Type': 'application/json'}); 
    var myObj = {
        name : 'Ryu',
        job  : 'Ninja',
        age  : 29
    };
    //res.end(myObj); // - this doesn't work becuase end wants string or buffer
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1'); 
console.log('yo, now listen to port 3000');}

// ---- End of Video 18 (Serving JSON Data)

var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if(req.url === '/api/ninjas'){
        var ninjas = [{name: 'ryu', age: 29}, {name:'yoshi', age:32}];
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(ninjas));
    } else{
        res.writeHead(404, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1'); 
console.log('yo, now listen to port 3000');

// ---- End of Video 19 (Basic Routing)