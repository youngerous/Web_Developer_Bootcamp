var mongoose = require("mongoose");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: String,
    author:{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports = mongoose.model("Campground", campgroundSchema);

// 이 파일을 require하면 해당 model을 얻게 된다.