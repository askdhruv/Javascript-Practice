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
