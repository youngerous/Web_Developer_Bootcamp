var age = Number(prompt("what is your age?"));

if(age<0){
    console.log("wrong age...");
}

if(age===21){
    console.log("happy 21st birtyday!!");
}

if(age%2 != 0){
    console.log("your age is odd!");
}

if(age % Math.sqrt(age) === 0 ){ //완전제곱수
    console.log("perfect square!");
}