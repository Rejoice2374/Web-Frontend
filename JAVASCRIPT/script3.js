/* What is a Javascript function?
A javascript function is a block of code designed to perform a particular task.

Syntax for creating a function:
function nameOfFunction(parameters or arguments){
    code to be executed
}

Note: After creating a function you need to call it 
e.g nameOfFunction()

*/

/*
function greet() {
  return "Welcome to my website";
}

document.write(greet());

var user = prompt("Hello, What is your name?");

document.write("<br>");

function greet2(user) {
  return user + ", welcome to my website";
}

// alert(greet2(user));

document.write("<br>");

function multiply(a, b) {
  document.write(a * b);
}
multiply(2, 3);
*/

/**
 Math.PI
 Math.sqrt
 Math.pow
 Math.round
 Math.ceil
 Math.floor
 Math.random
 Math.max
 Math.min
 */

console.log(Math.PI);
console.log(Math.sqrt(25));
console.log(Math.pow(100, 10));
console.log(Math.round(2.5666));
console.log(Math.ceil(2.5666));
console.log(Math.floor(2.5666));
console.log(Math.random());
console.log(Math.max(2, 3, 4, 5, 6, 7, 8, 9));
console.log(Math.min(2, 3, 4, 5, 6, 7, 8, 9));
console.log(Math.random() * 11); //displays random decimal numbers btw 0 and 10
console.log(Math.round(Math.random() * 11)); //displays random decimal numbers btw 0 and 10
console.log(Math.ceil(Math.random() * 10)); //displays random decimal numbers btw 0 and 10

document.write("<br>");
//Date Function
//To display date
document.write(new Date());
document.write("<br>");

//To display date alone
document.write(new Date().toDateString());
document.write("<br>");

//to display individual items in date function, use the get method

var d = new Date();
document.write(d.getDate(), "<br>");

/**
 getFullYear()
 getMonth()
 getDate()
 getDay()
 getHours()
 getMinutes()
 getSeconds()
 getMilliseconds()
 getTime()
 */

document.write(d.getFullYear(), "<br>");
document.write(d.getMonth(), "<br>");
document.write(d.getDate(), "<br>");
document.write(d.getDay(), "<br>");
document.write(d.getHours(), "<br>");
document.write(d.getMinutes(), "<br>");
document.write(d.getSeconds(), "<br>");
document.write(d.getMilliseconds(), "<br>");
document.write(d.getTime(), "<br>");

//To display the days of the week as a string instead of a number
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = d.getDay();

document.write(days[day]);

//Display the current month of the year as a string
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var month = d.getMonth();
document.write("<br>", months[month]);

//