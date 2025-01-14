document.write("Testing external JS");
//Data Types
document.write("<p>Hello world</p>"); //string
document.write("bet9ja"); //string
document.write(34 + "<br>"); //integer
document.write(34.8, "<br>"); //integer
document.write("34"); //integer
document.write(10 > 5); //boolean\
var phones = ["infinix", " iphone ", "Samsung", " oppo", 67, 90.1];
document.write(phones);
document.write("<br>phones");

//Concatenation is the act of joining data types together. Symbolss used are + or ,
//Variables are like containers that are used to hold data
//We use var or let or const to declarre a variable

var person = "Bola Ahmed Tinubu";
document.write("<br>");
document.write("welcome ", person);
document.write(
  "<p><br> Someone told me that ",
  person,
  " is 70 years old. The someone is ",
  person,
  "</p>"
);

var num1 = 5;
var num2 = 10;
var num3 = "5";

document.write("<br>", num1 + num2);
document.write("<br>");
document.write(num1 + num3);
document.write("<br>");
document.write("Love ", 4 + 4, "you");
document.write("<br>");
document.write("Love " + (4 + 4) + "you");

//Create a program that greets a user
// var user = prompt("What is your name?");
// alert("Welcome" + " " + user);

// //Telling a user his Age in 10 years
// var age = prompt("What is your age?");
// var newAge = parseInt(age) + 10;
// document.write("<br>");
// document.write("<p>You, ",  user,  " will be ",  newAge,  " years old in 10 years.</p>");

parseInt(); // is used to convert strings into integers
parseFloat(); // is used to convert integer to float

/* MATHEMATICAL OPERATORS
+ for Addition
- for subtraction
/ for division
* for multiplication
++ for increment by 1
-- for decrement by 1
+=2 increase by 2
-=2 decrease by 2
% shows the remainder after division
** for exponential or raise to power

*/

document.write("<h2> Mathematical Operators </h2>");
var a = 10;
var b = 3;
var c = "10";

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);
console.log(a ** b);

/* Comparison Operators
== for equal to
< for less than 
> for greater than
<= for less than or equal to
=> for greater than or equal to
=== for checking data type of same number
*/

console.log(a == b);
console.log(a < b);
console.log(a > b);
console.log(a >= b);
console.log(a <= b);
console.log(a === b);
console.log(a == c);
console.log(a === c);

/*
LOGICAL OPERATORS
AND symbol &&
OR symbol ||
NOT symbol !

Condidtional Statement
if(condition)
{
    code to be executed if true
}
else {
    code to be executed if false
}
*/

if (a < b) {
  alert("A is lesser than B");
} else {
  alert("A is not lesser than B");
}

var character = false;
var intelligence = true;
var beauty = true;

if (character && intelligence && beauty) {
  alert("Our brother will Marry you");
} else {
  alert("Our brother will marry you");
}

//ATM

//Create a simple age checker, if they are below 18 deny access, if they 18 and above give access, if they are older 60 year deny access.
//Grading systemd5