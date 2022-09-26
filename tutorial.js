//---- First 3 videos did not have any code...

if(false){
var time = 0;
setTimeout(function(){ //  - execudes a code at designed time when it's called (it gives it a delay)
     console.log('3 seconds have past');
}, 3000);

setInterval(function(){ // - execudes a code at designed time, when it's called and it repeats
    time += 2;
    console.log(time + ' seconds have past');
}, 2000);

var timer = setInterval(function(){
    time += 2;
    console.log(time + ' seconds have past');
    if (time > 5) clearInterval(timer); // - clearInterval stops the interval
}, 2000);


console.log(__dirname);  // - get directory               location
console.log(__filename); // - get directory + the program location
}
//---- End of video 4 (The Global Object)
if(false){
//normal function statement     // - Statements don't produce a value so they can't be used as function arguments
function sayHi(){
    console.log('hi');
}
sayHi();

//function expression           // - Expressions produce a value that will be passed into the function
var sayBye = function(){ //anonymous function (= to a variable)
    console.log('bye');
}
sayBye();

function callFunction(fun){     // - Varible (fun) will be passed to the function, that will call it
    fun();}
callFunction(sayBye);           // - calls sayBye
//callFunction();               // - this calls and error, because it is not a function
}
//---- End of video 5 (Function Expressions)