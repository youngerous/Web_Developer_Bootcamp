var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

// load될 때 실행
init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    // mode buttons event linteners
    for(var i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        this.classList.add('selected');
        this.textContent === "Easy" ? numSquares=3 : numSquares=6;
        reset();
        });
    }
}

function setUpSquares(){
    // 참고: map은 배열에서 사용되는 함수이다.
    for(var i=0; i<squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var  clickedColor = this.style.backgroundColor;

            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = 'Correct';
                resetButton.textContent = 'Play Again?';
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = 'Try Again';
            }
        });
    }
}

function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = 'none';
        }
    }

    messageDisplay.textContent = '';
    resetButton.textContent = 'New Colors';
    h1.style.backgroundColor = 'steelblue';
}

// easyBtn.addEventListener("click",function(){
//     h1.style.backgroundColor = 'steelblue';
//     easyBtn.classList.add('selected');
//     hardBtn.classList.remove('selected');
//     messageDisplay.textContent = '';

//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(var i=0; i<squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }else{
//             squares[i].style.display = 'none';
//         }
//     }
// });

// hardBtn.addEventListener("click",function(){
//     h1.style.backgroundColor = 'steelblue';
//     hardBtn.classList.add('selected');
//     easyBtn.classList.remove('selected');
//     messageDisplay.textContent = '';

//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for(var i=0; i<squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = 'block';
//     }
// });

resetButton.addEventListener("click", function(){
    reset();
});


function changeColors(color){
    //loop through all squares
    for(var i=0; i<squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

function generateRandomColors(num){
    //make an array
    var arr = [];

    //add num random colors to arr
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }

    //return that array 
    return arr;
}

function randomColor(){
    //pick a 'red' from 0 - 255
    var red = Math.floor(Math.random() * 256);
    //pick a 'green' from 0 - 255
    var green = Math.floor(Math.random() * 256);
    //pick a 'blue' from 0 - 255
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

