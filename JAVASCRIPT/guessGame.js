// guessing game
var ranNumber = Math.ceil(Math.random() * 100);
var userNumber = prompt("Choose a number between 1 and 100");

console.log(ranNumber);

if (ranNumber == userNumber) {
  alert("Wow! You guessed correctly");
} else {
  alert("Sorry you have guessed wrongly");
}
