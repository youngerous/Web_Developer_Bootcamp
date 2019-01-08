var express      = require('express'),
    app          = express(),
    bodyParser   = require('body-parser'),
    mongoose     = require('mongoose'),
    flash        = require('connect-flash'),
    passport     = require('passport'),
    LocalStrategy= require('passport-local'),
    methodOverride = require('method-override'),
    Campground   = require('./models/campground'),
    Comment      = require('./models/comment'),
    User         = require('./models/user'),
    seedDB       = require('./seeds');

//requiring routes
var commentRoutes    = require('./routes/comments'),
    campgroundRoutes = require('./routes/campgrounds'),
    indexRoutes       = require('./routes/index');

var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp";
// terminal에 export DATABASEURL=mongodb://localhost/yelp_camp 입력하면 로컬db 사용가능
mongoose.connect(url); //heroku 계정에 주소 등록돼있음


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(express.static(__dirname + "/public")); 
app.use(methodOverride('_method'));
app.use(flash());
// seedDB(); // 서버를 start할 때마다 실행
 
// PASSPORT CONFIGURATION
app.use(require('express-session')({
    secret: 'Once again Moja wins cutest dog!',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    // 모든 route에 currentUser를 저장(어디서든 사용 가능)
    res.locals.currentUser = req.user;
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
});

app.use('/',indexRoutes);
app.use('/campgrounds/:id/comments',commentRoutes);
app.use("/campgrounds",campgroundRoutes);

app.listen(process.env.PORT, process.env.IP);
// app.listen(3000, function(){
//     console.log('YelpCamp Server has started...');
// });

/*
Authentication: for login
Authorization: giving permission for user
 */