// Assignment code here
const resultEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

  resultEl.innerText = generatePassword(
    lowercase,
    uppercase,
    numbers,
    symbols,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {

  let generatedPassword = '';


  // Loop through some count of characters from i = 0 to i < length.
  
  for (let i = 0; i < length; i++) {
    // For each time we loop, we want to pick a random char based on whether
    // we are allowing lower, upper, numbers, or symbols.

    // Start with empty.
    listOfPossibleChars = [];



    // Randomize the list.
    var randomListOfPossibleChars = listOfPossibleChars.sort(function () {
      return Math.random - 0.5;
    });

    // Pick one from the list.
    var randomChar = randomListOfPossibleChars.pop();

    generatedPassword = generatedPassword + randomChar;
  }

  console.log(generatedPassword);

  return generatedPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var length = window.prompt("Enter a number from 8 to 128 for password length.");
  var lowercase = window.confirm("Would you like to use lowercase letters?");
  var uppercase = window.confirm("Would you like to use uppercase letters?");
  var symbols = window.confirm("Would you like to use symbols?");
  var numbers = window.confirm("Would you like to use numbers?");

  var password = generatePassword(lowercase, uppercase, numbers, symbols, length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generateEl.addEventListener('click', function () {
//   var length = window.prompt("Enter a number from 8 to 128 for password length.");
//   var lowercase = window.confirm("Would you like to use lowercase letters?");
//   var uppercase = window.confirm("Would you like to use uppercase letters?");
//   var symbols = window.confirm("Would you like to use symbols?");
//   var numbers = window.confirm("Would you like to use numbers?");