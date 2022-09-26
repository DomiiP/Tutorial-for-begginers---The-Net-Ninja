if (false){
var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};
module.exports.counter = counter;   // added propeties to export counter

var adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`; //backtick are used for template strings
};
module.exports.added = adder;       // added propeties to export adder
var pi = 3.142;
module.exports.pi = pi;             // added propeties to export pi
}
//You have to make parts of module public so it can be used in other .js scripts
//module.exports = counter;         // module exports to a varible counter
//module.exports still has all three propeties on it

//There is an easier way to do this
if(false){
module.exports.counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};
module.exports.added = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;
};
module.exports.pi = 3.142;}

//There is also the alternative to the first way
if(true){
var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};
var added = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`; //backtick are used for template strings
};
var pi = 3.142;

module.exports = {
    counter : counter,
    added   : added,
    pi      : pi
};
}

// ---- Video 6 (Modules and require()) + Video 7 (Module Patterns) - with app.js
