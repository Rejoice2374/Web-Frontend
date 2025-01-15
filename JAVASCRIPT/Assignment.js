//Create a program that greets a user
// var user = prompt("What is your name?");

//Telling a user his Age in 10 years
// var age = prompt("What is your age?");
// var newAge = parseInt(age);

//Switch & Case
/*
const day = prompt("Time to wake each day, Enter a day:");
switch (day) {
  case "sunday":
    console.log("It's sunday, Time to wake is 7am");
    break;
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
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
    */

/* 
if (newAge < 18 || newAge > 60) {
  alert(user + " you are not eligible to check your Grade");
  } else {
    alert("Welcome " + user + " you are eligible to check your Grade");
}
case "friday":
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
// Adding event listener for the button
document.getElementById("checker").addEventListener("click", function () {
  // Getting the value of the input when button is clicked
  var student = document.getElementById("scoreee").value;
  var student_score = parseInt(student);

  const grade = document.getElementById("grad");

  if (isNaN(student_score) || student_score < 0) {
    grade.innerHTML = "Invalid Entry. Please enter a valid score.";
  } else if (student_score >= 70 && student_score <= 100) {
    grade.innerHTML =
      "With your score of " + student_score + " you got an A, You are an Idolo";
  } else if (student_score < 70 && student_score >= 60) {
    grade.innerHTML = "With your score of " + student_score + " you got a B";
  } else if (student_score < 60 && student_score >= 50) {
    grade.innerHTML = "With your score of " + student_score + " you got a C";
  } else if (student_score < 50 && student_score >= 45) {
    grade.innerHTML = "With your score of " + student_score + " you got a D";
  } else if (student_score < 45 && student_score >= 40) {
    grade.innerHTML = "With your score of " + student_score + " you got an E";
  } else if (student_score < 40 && student_score >= 0) {
    grade.innerHTML =
      "With your score of " + student_score + " you got an F, You are an Odolo";
  }
});

//Submit Button

const formBtn = document.querySelector("#form1");
const scoreBtn = document.querySelector("#checker");
const closeBtn = document.querySelector(".grade .close-btn");
const popup = document.getElementById("popup");

scoreBtn.addEventListener("click", function () {
  (popup.style.display = "block"),
    (formBtn.style.display = "none"),
    console.log(student_score);
});

closeBtn.addEventListener("click", function () {
  (popup.style.display = "none"), (formBtn.style.display = "block");
});
