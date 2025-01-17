//LOOPS

/* 
Loops are used to execute a block of code a number of times.
Types of Loop
We have two major types of loop
- For
- While
For loop is used when you want a condition to be true for a number of time
OR;
 Loops through a block of code a number of time 
While loop iterates (to repeat an action) through a block of code while a specified condition is true

The for loop has the following syntax:
for (statement 1  (initialization); statement 2 
(condition); statement 3 (increment or decrement)) {
    code block to be executed
}

The While loop has the following syntax:

initiliazation
while (condition) {
    code block to be executed
    increment or decrement
}
*/

//Counting from 1 to 10
for (var n = 1; n <= 10; n++) {
  document.write("<br>" + n);
}

//Counting from 10 to 1
for (var b = 10; b >= 1; b--) {
  document.write("<br>", b);
}

//Ask users for a number to mulitiply
document.write("<h2> Multiplication table of user's number</h2>");
var p = prompt("Enter a number");
for (var a = 1; a <= 12; a++) {
  document.write("<p>" + p + "x" + a + "=" + p * a + "</p>");
}

const phones = ["iphone", "samsung", "nokia", "tecno", "infinix", "itel"];
document.write(phones, "<br>");
document.write(phones[2], " ", phones[3], "<br>");
document.write(phones.slice(2, 4), "<br>");
document.write(phones.slice(1, 5), "<br>");
document.write(phones[phones.length - 1], "<br>");
for (var ph = 0; ph < phones.length; ph++) {
  document.write(ph, ". ", phones[ph], "<br>");
}

var k = 1;
while (k <= 10) {
  document.write(k, "<br>");
  k++;
}

document.write("<br>");
var m = 100;
while (m >= 10) {
  document.write(m, "<br>");
  m -= 10;
}

document.write("<br>");
var w = 0;
while (w <= 20) {
  document.write(w, "<br>");
  w += 2;
}
