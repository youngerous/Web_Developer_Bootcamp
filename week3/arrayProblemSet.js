printReverse = function(arr){
    for(let i=arr.length-1; i>=0; i--){
        console.log(arr[i]);
    }
}

isUniform = function(arr){
    const criteria = arr[0];
    let isIdentical = true;
    arr.forEach(element => {
        if(element !== criteria){
            isIdentical = false;
        }
    });

    if(isIdentical) {return true;}
    else            {return false;}
    
}

sumArray = function(arr){
    let total = 0;
    arr.forEach(element => {
        total += element;
    });
    return total;
}

max = function(arr){
    let maxElm = arr[0];
    arr.forEach(element => {
        if(element > maxElm){
            maxElm = element;
        }
    });
    return maxElm;
}