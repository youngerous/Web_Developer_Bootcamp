var express      = require('express'),
    app          = express(),
    bodyParser   = require('body-parser'),
    mongoose     = require('mongoose');

mongoose.connect('mongodb://localhost/yelp_camp');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: 'Slack', 
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61aeqmqMFHbAaBHsEkXxBNa8aFNtSn7szXJAAt-NvpNNY4eZHrg',
//         description: "Logo of Slack"
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("NEWLY CREATED CAMPGROUND");
//             console.log(campground);
//         }
//     });

app.get('/', function(req, res){
    res.render('landing');
});

// INDEX - show all campgrounds
app.get('/campgrounds', function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render('index', {campgrounds: allCampgrounds});
        }
    });
});

/* Different from '/campgrounds' in GET method
 * Format Convention: Make same '/name' both in GET and POST */
// CREATE - add new campground to DB
app.post('/campgrounds', function(req, res){
    //get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};

    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            //redirect back to campgrounds page
            res.redirect('/campgrounds');
        }
    });

});

// NEW - show form to create new campground
app.get('/campgrounds/new', function(req, res){
    res.render('new.ejs');
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //find the campground with privided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(3000, function(){
    console.log('YelpCamp Server has started...');
});