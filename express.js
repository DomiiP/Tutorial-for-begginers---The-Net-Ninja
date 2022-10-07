// Express - used for routing system (has templating engines and contains middleware framework)
// Installed express agian (npm install express, you can also npm install express - save)
var express = require('express'); // Module
var app = express();
app.get('/',function(req,res){ //function(req,res) is extended in express with additional functionality
    // Express listend to '/' (get request) and when it recieves the request, it sends text down below
    // It is also smart enough to put string into page
    res.send('this is the home page');
}); 
app.get('/contact',function(req,res){ 
    res.send('this is the contact page');
}); 
app.listen(3000); // Listen to port
// You can now acces both pages with localhost:3000 or localhost:3000/contact

// HTTP Methods (GET, POST, DELETE, PUT) - can be used with express
// Responding to Request
// GET    - app.get   ('route', fn)
// POST   - app.post  ('route', fn)
// DELETE - app.delete('route', fn)

// Fixed error 'PowerShell Script Not Digitally Signed'
// Used command: 'Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass'

// ---- End of Video 23 (Introduction to Express)