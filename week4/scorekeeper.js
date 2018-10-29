var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var scoreBoard = document.querySelector("h1");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("#winningScoreDisplay");
var winningScore = 5;
var gameOver = false;

var p1Score = 0;
var p2Score = 0;

/* p1와 p2의 코드가 똑같기 때문에 더 효율적으로 짤 수 있는 방법이 있다. */

p1Button.addEventListener("click",function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }

});

p2Button.addEventListener("click",function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }

});

resetButton.addEventListener("click",function(){
    reset();
});

/* change는 모든 변화를 의미 */
numInput.addEventListener("change", function(){
    if(numInput.value > 0){
        winningScoreDisplay.textContent = this.value;
        winningScore = Number(this.value);
        reset();
    }
});

function reset(){
    p1Score = 0;
    p1Display.textContent = p1Score;
    p1Display.classList.remove("winner");

    p2Score = 0;
    p2Display.textContent = p2Score;
    p2Display.classList.remove("winner");

    gameOver = false;
}
