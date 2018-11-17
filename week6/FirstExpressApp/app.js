var express = require('express');

var app = express(); // It includes all the contents of express directory

// "/" => "Hi there!"
app.get('/', function(req, res){ //request & response
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get('/bye', function(req, res){
    res.send('Goodbye!');
});

// "/dog" => "MEOW!"
app.get('/dog', function(req, res){
    console.log('Someone made a request to /dog!!'); //only shown in terminal
    res.send("MEOW!")
});

app.get('/r/:subredditName', function(req, res){
    var subreddit = req.params.subredditName;
    res.send('Welcome to a ' + subreddit.toUpperCase() + ' subreddit!');
});

app.get('/r/:subredditName/comments/:id/:title', function(req, res){
    var subreddit = req.params.subredditName;
    var id = req.params.id;
    var title = req.params.title;
    res.send('Subreddit: '+subreddit + '\nID: ' + id + '\nTITLE: ' + title);
});

// This should be in the last position of codes
app.get("*", function(req, res){
    res.send('YOU ARE A STAR!!!');
});



// Tell Express to listen for requests (start server)
app.listen(3000, function(){
    console.log("Server will be started on port 3000")
});