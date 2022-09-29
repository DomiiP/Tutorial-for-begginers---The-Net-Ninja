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
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8'); //__dirname - get your current directory
//utf8 encoding means we will get back chunk's in text rather then in numbers
myReadStream.on('data', function(chunk){ //.on method listens to myReadStream
    //We read the file, it fills the buffer, passes chunk of data on and it fires the function
    console.log('new chunk recieved:' + chunk);
});

// ---- End of Video 14 (Readable Streams)