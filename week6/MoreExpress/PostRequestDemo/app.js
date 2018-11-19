var express = require('express');
var app = express();
var bodyParser = require('body-parser'); // npm install body-parser --save

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//This array should be originally in the database!
var friends = ['Tony', 'Mirande', 'Justin', 'Lily'];

app.get('/', function(req, res){
    res.render('home');
});

app.get('/friends', function(req, res){
    res.render('friends', {friends: friends});
});

/* Post request is used to add something */
app.post('/addfriend', function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect('/friends');
});

app.listen(3000, function(){
    console.log('started~~~');
});