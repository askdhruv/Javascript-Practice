//Whos going to buy the lunch excerices!!!!
function whosPaying(names) {
    
    var l = names.length;
    var n = Math.floor(Math.random()*l);
    var randomPerson = names[n];
    
    return randomPerson + " is going to buy lunch today!";
}


/******New code*******/


//lyrics of 99 bottles!!
function lyricsOf99Bottles(){
    var n = 99;
    while(n>=0){
        console.log(n + " bottles of beer on the wall, "+ n + " bottles of beer");
        console.log("Take one down and pass it around, " + --n + " bottles of beer on the wall");
    }
        console.log("1 bottle of beer on the wall, 1 bottle of beer");
        console.log("Take onw down and apss it around, no bottles of beer on the wall");
}

/******New code*******/


var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]; 
var name = prompt("Whats your name");
 var one = name.slice(0,1);
console.log(one);
one = one.toUpperCase();
var l = name.length;
var rem = name.slice(1,l);
rem = rem.toLowerCase();
alert("Hello " + one + rem);
var dog = prompt("dog age");
var human = (dog-2)*4+21;
alert(human);
function bmiCalculator(w, h){
    var bmi = w/(h*h);
    return Math.floor(bmi);
}

var bmi = bmiCalculator(65, 1.8); 
console.log(bmi);

var n = Math.random();
n = Math.floor(n*100)+1;
//console.log(n);
if(n>=50){
    console.log("Yes");
}
else{
    console.log("No");
}

var lists = ["Dhruv", "Nishant", "Vedant", "Arpit"];
var name = prompt("Name");
if(lists.includes(name)){
    alert("Welcome");
}
else{
    alert("Bye bye");
}

var n = Math.random();
n = Math.floor(n*100) + 1;
if(n%3==0){
    console.log("Fizz");
}
if(n%5==0){
    console.log("Buzz");
}
if(n%3==0 && n%5==0){
    console.log("FizzBuzz");
}



