/* What is a Javascript function?
A javascript function is a block of code designed to perform a particular task.

Syntax for creating a function:
function nameOfFunction(parameters or arguments){
    code to be executed
}

Note: After creating a function you need to call it 
e.g nameOfFunction()

*/

function greet() {
  return "Welcome to my website";
}

document.write(greet());

var user = prompt("Hello, What is your name?");

document.write("<br>");

function greet2(user) {
  return user + ", welcome to my website";
}

alert(greet2(user));

document.write("<br>");

function multiply(a, b) {
  document.write(a * b);
}

multiply(2, 3);

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
