//Create a program that greets a user
var user = prompt("What is your name?");

//Telling a user his Age in 10 years
var age = prompt("What is your age?");
var newAge = parseInt(age);

//Switch & Case
const day = prompt("Time to wake each day, Enter a day:");

switch (day) {
  case "sunday":
    console.log("It's sunday, Time to wake is 7am");
    break;
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("It's workday, Time to wake is 5am");
    break;
  case "saturday":
    console.log("It's saturday...Relax and Enjoy your weekend");
    break;
  default:
    console.log("invalid" + day + "is not a day");
    break;
}

const Supermarket = alert(
  "welcome to MADONNA SUPERMARKET! We have apples, bananas, cherries, oranges, mangoes, papayas available for purchase."
);

const fruit = prompt("What would you like to buy?");

switch (fruit) {
  case "apples":
    alert("Apples are N500 each");
    break;
  case "bananas":
    alert("Bananas are N200 per bunch");
    break;
  case "cherries":
    alert("Cherries are N20 per one");
    break;
  case "oranges":
    alert("Oranges are N50 per one");
    break;
  case "mangoes":
  case "papayas":
    alert("Mangoes and Papayas are N100 per one");
    break;
  default:
    alert("We do not have this fruit in stock");
}

alert("Thank You for shopping with Us");

/* 
if (newAge < 18 || newAge > 60) {
    alert(user + " you are not eligible to check your Grade");
} else {
    alert("Welcome " + user + " you are eligible to check your Grade");
}
*/

/* 
var visitor = prompt("How old are you?");
var visitor_age = parseInt(visitor);
if (visitor_age < 18) {
  alert("You are too young for this site");
} else if (visitor_age >= 18 && visitor_age <= 60) {
  alert("You are Welcome");
} else if (visitor_age > 60) {
  alert("You are too old for this site");
} else {
  alert("invalid Entry");
} */

//GRADE CHECKER
var student = document.getElementById("score");
var student_score = parseInt(student);

if (student_score >= 70 && student_score <= 100) {
  document.getElementById("grad").innerHTML("You got an A, You are an Idolo");
} else if (student_score < 70 && student_score >= 60) {
  document.getElementById("grad").innerHTML("You got a B");
} else if (student_score < 60 && student_score >= 50) {
  document.getElementById("grad").innerHTML("You got a C");
} else if (student_score < 50 && student_score >= 45) {
  document.getElementById("grad").innerHTML("You got a D");
} else if (student_score < 45 && student_score >= 40) {
  document.getElementById("grad").innerHTML("You got a E");
} else if (student_score < 40 && student_score >= 0) {
  document.getElementById("grad").innerHTML("You got a F, You are an Odolo");
} else {
  document.getElementById("grad").innerHTML("Invalid Entry");
}

//Submit Button
/*
const formBtn = document.querySelector("#form1");
const scoreBtn = document.querySelector(".grade");
const closeBtn = document.querySelector(".grade .close-btn");

scoreBtn.addEventListener("click", function () {
    style.display = "block";
});
*/
