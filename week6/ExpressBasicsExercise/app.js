var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animalName', function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        goldfish: "..."
    }
    var animal = req.params.animalName.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
});

app.get('/repeat/:string/:number', function(req, res){
    var string = req.params.string;
    var number = Number(req.params.number);
    var result = "";
    for(var i=0; i<number; i++){
        result += string + ' ';
    }
    res.send(result);
});

app.get('*', function(req, res){
    res.send('Sorry, page not found... What are you doing with your life?');
})

app.listen(3000, function(){
    console.log('Server Started');
});