var fs = require('fs');
if(false){
var readMe = fs.readFileSync('readMe.txt','utf8'); //Explicit node; synchronous method; this is blocking code until it's done reading
console.log(readMe);
fs.writeFileSync('writeMe.txt',readMe); //Creates file 'writeMe.txt' and puts text from 'readMe.txt' into it
}
if(false){
fs.readFile('readMe.txt','utf8',function(err,data){//If there is a problem, it will call error, second is retrived data
 //console.log(data);
 fs.writeFile('writeMe.txt',data);
}); //This is a much better way of reading files, because it's asynchronous method
}
// ---- End of Video 9 (Reading & Writing Files(fs))

//fs.unlink('writeMe.txt'); //This doesn't work what?
if(false){//Synchronous method
fs.mkdirSync('stuff'); //   makes directory
fs.rmdirSync('stuff'); // deletes directory
}
if(false){ //Asynchronous method
fs.mkdir('stuff', function(){ // Make Directory stuff
    fs.readFile('readMe.txt', 'utf8', function(err, data){ // Then we are reading file and getting data
        fs.writeFile('./stuff/writeMe.txt', data); // Then we pass through new file
    });
}); //And it does not work?? Only makes directory..

fs.unlink('./stuff/writeMe.txt', function(){ //First removes writeMe.txt inside
    fs.rmdir('stuff'); //Then it removes directory, because it can't remove while not being empty...
});}

// ---- End of Video 10 (Creating & Removing Directories)