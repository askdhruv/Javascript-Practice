//FizzBuzz coding exercise in js

var output = [];
var count = 1;
function FizzBuzz(){

    if(count%3===0 && count%5===0){
        output.push("FizzBuzz");
    }
    
    else if(count%3===0){
        output.push("Fizz");
    }
    else if(count%5===0){
        output.push("Buzz");
    }

    else
    {
        output.push(count);
    }
    count++;
    
    console.log(output);
}

//FuzzBuzz with while loop


var output = [];
var count = 1;
function FizzBuzz(n){

    while(count<=n){

    if(count%3===0 && count%5===0){
        output.push("FizzBuzz");
    }
    
    else if(count%3===0){
        output.push("Fizz");
    }
    else if(count%5===0){
        output.push("Buzz");
    }

    else
    {
        output.push(count);
    }
    count++;
    
    console.log(output);
        
    }
}

// to run - type FizzBuzz(till number you want);
