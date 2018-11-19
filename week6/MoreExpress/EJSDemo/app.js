var express = require('express');
var app = express();

/* express to serve the content of the 'public' directory */
app.use(express.static('public'));
app.set('view engine', 'ejs'); // we don't need to add '.ejs' in router

app.get('/', function(req, res){
    res.render("home"); // view engine works! (home.ejs -> home)
});

app.get('/fallinlovewith/:thing', function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar : thing});
});

app.get('/posts', function(req, res){
    var posts = [
        {title: 'Post1', author: 'Suzy'},
        {title: 'My adorable pet bunny', author: 'Charlie'},
        {title: 'Can you believe this pomsky?', author: 'Colt'}
    ];
    res.render('posts.ejs', {posts: posts});
});

app.listen(3000, function(){
    console.log('Server Started...');
});

