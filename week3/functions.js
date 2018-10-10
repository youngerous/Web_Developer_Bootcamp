function isEven(num){
    if(num%2 === 0){
        return true;
    }
    return false;
}

function factorial(num){
    if(num<0){
        return false;
    }

    if(num===0){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}

function kebabToSnake(str){
    var temp = "";
    for(var i=0; i<str.length; i++){
        if(str[i] === "-"){
            temp += "_";
        }else{
            temp += str[i];
        }
    }
    return temp;
}

function kebabToSnake2(str){
    var newStr = str.replace(/-/g, "_");
    return newStr;
} 
