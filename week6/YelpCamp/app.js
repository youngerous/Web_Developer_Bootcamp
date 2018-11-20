var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');

var campgrounds = [
    {name: 'Salmon Creek', image: 'https://pixabay.com/get/e83db7072ef6053ed1584d05fb1d4e97e07ee3d21cac104491f2c67aa7ebb7b1_340.jpg'},
    {name: 'Granite Hill', image: 'https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144597f7c279a1efbc_340.jpg'},
    {name: "Mountain Goat's Rest", image: 'https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg'},
    {name: 'Salmon Creek', image: 'https://pixabay.com/get/e83db7072ef6053ed1584d05fb1d4e97e07ee3d21cac104491f2c67aa7ebb7b1_340.jpg'},
    {name: 'Granite Hill', image: 'https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144597f7c279a1efbc_340.jpg'},
    {name: "Mountain Goat's Rest", image: 'https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg'},    {name: 'Salmon Creek', image: 'https://pixabay.com/get/e83db7072ef6053ed1584d05fb1d4e97e07ee3d21cac104491f2c67aa7ebb7b1_340.jpg'},
    {name: 'Granite Hill', image: 'https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144597f7c279a1efbc_340.jpg'},
    {name: "Mountain Goat's Rest", image: 'https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg'},
    {name: 'Salmon Creek', image: 'https://pixabay.com/get/e83db7072ef6053ed1584d05fb1d4e97e07ee3d21cac104491f2c67aa7ebb7b1_340.jpg'},
    {name: 'Granite Hill', image: 'https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144597f7c279a1efbc_340.jpg'},
    {name: "Mountain Goat's Rest", image: 'https://farm2.staticflickr.com/1086/882244782_d067df2717.jpg'}
];

app.get('/', function(req, res){
    res.render('landing');
});

app.get('/campgrounds', function(req, res){
    res.render('campgrounds', {campgrounds: campgrounds});
});

// Different from '/campgrounds' in GET method
// ** Format Convention: Make same '/name' both in GET and POST **
app.post('/campgrounds', function(req, res){
    //get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);

    //redirect back to campgrounds page
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res){
    res.render('new.ejs');
});

app.listen(3000, function(){
    console.log('YelpCamp Server has started...');
});