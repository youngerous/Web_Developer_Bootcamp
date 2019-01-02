var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [
    {
        name: "Cloud's REST",
        image: "https://media.gettyimages.com/photos/aerial-view-of-clouds-over-green-landscape-picture-id600825209",
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
    },
    {
        name: "CAT CUTE",
        image: "https://media.gettyimages.com/photos/closeup-of-cats-yawning-against-white-background-picture-id961466534",
        description: "my cat"
    },
    {
        name: "Students..",
        image: "https://media.gettyimages.com/photos/business-woman-working-on-desk-picture-id850630688",
        description: "getting a job is hard"
    }
]


function seedDB(){
    // Remove all campgrounds
    Campground.remove({},function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log('removed campgrounds!');
        // // Add few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         }else{
        //             console.log("added a campground");
        //             // Add few comments
        //             Comment.create({
        //                text: "This is good , but I wish there was an Internet" ,
        //                author: "Homer"
        //             }, function(err, comment){
        //                 if(err){
        //                     console.log(err);
        //                 }else{
        //                     campground.comments.push(comment);  
        //                     campground.save();
        //                     console.log("Created new comment");
        //                 }
        //             });
        //         }
        //     });
        // });
    });


}

module.exports = seedDB;