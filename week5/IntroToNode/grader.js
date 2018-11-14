function average(scores){
    var total = 0;
    scores.forEach(score => {
        total += score;
    });

    var avg = total/scores.length;
    return Math.round(avg);
}

var scores = [90,98,89,100,100,86,94];
console.log(average(scores));