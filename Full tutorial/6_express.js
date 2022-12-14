// Express - used for routing system (has templating engines and contains middleware framework)
// Installed express agian (npm install express, you can also npm install express - save)
var express = require('express'); // Module
var app = express();
var bodyParser = require('body-parser'); // Tutorial number 30
var urlencodedParser = bodyParser.urlencoded({extended: false});

// ---------------------------------------------------
// - This is from  TUTORIAL #25, but has to be pased here

app.set('view engine', 'ejs'); // Express knows that we use ejs as view engine
// By default, it is going to look at ./views folder for data
// ---------------------------------------------------

// ---------------------------------------------------
// - This is from  TUTORIAL #28, but has to be pased here

/*
app.use('/assets', function(req,res, next){ // next - used for poiting out next middleware
    console.log(req.url);
    next();
    // If you type localhost:3000/assets, it's going to output '/'
    // But if you type localhost:3000/contact, it's not going to output anything, since it doesn't match
    // the middleware
});*/
app.use('/assets', express.static('assets'));
// First parameter is linking the route, the second one is linking the directory
// ---------------------------------------------------



if(false){
app.get('/',function(req,res){ //function(req,res) is extended in express with additional functionality
    // Express listend to '/' (get request) and when it recieves the request, it sends text down below
    // It is also smart enough to put string into page
    res.send('this is the home page');
}); 
app.get('/contact',function(req,res){ 
    res.send('this is the contact page');
});  
app.listen(3000); // Listen to port
}
// You can now acces both pages with localhost:3000 or localhost:3000/contact

// HTTP Methods (GET, POST, DELETE, PUT) - can be used with express
// Responding to Request
// GET    - app.get   ('route', fn)
// POST   - app.post  ('route', fn)
// DELETE - app.delete('route', fn)

// Fixed error 'PowerShell Script Not Digitally Signed'
// Used command: 'Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass'

// ---- End of Video 23 (Introduction to Express)

if(false){
app.get('/profile/:name',function(req,res){ // We can ID in database (make a database query to return data)
    res.send('You requested to see a profile with the name of ' + req.params.name); //We can access id with params
}); }

// ---- End of Video 24 (Express Route Params)

// This is how you load pages easily
// Changed res.sendFile to res.render for tutorial n27
app.get('/',function(req,res){ 
    res.render('index');
});
app.get('/contact',function(req,res){ 
    //res.render('contact'); - This is changed for Tutorial n29
    res.render('contact', {qs: req.query}); // We pass any data from query string to 'contact' view
})

app.post('/contact', urlencodedParser, function(req,res){  //This is tutorial number 30
    // Used for posting data from form 
    // When we hit submit on the form, it's going to fire post handler, it's going to parse data of the body
    // and give us the acces to the data and we going to parse it back
    res.render('contact-sucess', {data: req.body}); // Now we are going to have data 'req.body' acceses in view 'contact-success'
})

// Installing ejs with 'npm install ejs - save'
// ejs - view / template engine to set variables into different templates

if (false){
app.get('/profile/:name',function(req,res){
    var data = {age: 29, job: 'ninja'};
    res.render('profile', {person: req.params.name, data: data}); // We render a view by template engines
    // With parameters we can send data to the template
    }); 
app.listen(3000);}

// ---- End of Video 25 (Template Engines)

app.get('/profile/:name',function(req,res){
    var data = {age: 29, job: 'ninja', hobbies: ['eating','fishing','fighting']};
    res.render('profile', {person: req.params.name, data : data});
    // Also updated profile.ejs, but i don't want to try if to stop that
}); 
app.listen(3000);
// ---- End of Video 26 (Template Engines - part 2)

// Created partials folder and navigation file for partial views
// Also included a partial view in main view (nav --> profile)

//Everythings starts to break with '<% include partials/nav.ejs %>' - have to fix it..

// ---- End of Video 27 (Partial Templates)

// Middleware - code that runs between a request and a response
// Added styles.css 
// ---- End of Video 28 (Middleware & Static Files)

// Changed contact.ejs and something on line 66/67 
// Fixed bots css and include .ejs files

// ---- End of Video 29 (Query Strings)

// POST - request method, ask server to accept/store data which is enclosed in the body of the request (forms)

// Changed contact.ejs
// Installed body-parser with command 'npm install body-parser'


// ---- End of Video 30 (Post Requests)
