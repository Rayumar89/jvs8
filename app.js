
// q1

var a = prompt("enter a character")
if(!isNaN(a)){
    alert("the input is a number");
}else if(a===a.toUpperCase()){
    alert("the input is an uppercase letter");
}else if(a===a.toLowerCase()){
    alert("the input is an lowercase letter");
}else{console.log("the input is not valid character");
}


// q2

var e = prompt("enter a first number")
var r = prompt("enter a second number")
if(e==r){
    alert("the number in equel")
}else if(e>r){
    alert("the first number is greater then of second number")
}else if(e<r){
    alert("first number less then second")
}else{"the number is not valid"}




// q3

var y = prompt("enter a nagitive or positive number")
if(y<0){
    alert("this is a nagitive number")
}else if(y>0){
    alert("this is a positive number")
}else{"this number is equel to 0"}




// q4

var f = prompt("enter a character")
if(f=="a"){
    alert("true")
}else if(f=="e"){
    alert("true")
}else if(f=="i"){
    alert("true")
}else if(f=="o"){
    alert("true")
}else if(f=="u"){
    alert("true")
}else{
    alert("false")
}



// q5

var password = "rjmax"
var pas = prompt("please inter your password")
if(pas == password){
    alert("correct! the password you entered matches")

}else if(pas == ""){
    alert("please enter your password")
}else{
    alert("incorrect password")
}





// q6

var hours = prompt("enter today working hours")
if(hours<18){
    alert("Good day")
}else{
    alert = ("Good evening")
}