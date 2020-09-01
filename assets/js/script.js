//selected elements
const generateBtn = document.querySelector('#generate');
const copyBtn = document.querySelector('#copy');
let passwordText = document.querySelector('#password');

//character arrays
let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialCharacters = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '?', '@', ',', '-', '.', '/', ':', ';', '<', '>', '=', '[', ']', '\\', '^', '_', '`', '{', '}', '|', '~'];

let randomPassword = [];

//generate password
function generatePassword(arr, number) {
    let newArray = arr.flat();
    let newPassword = [];
    for (let i = 0; i < number; i++) {
        let randomIndex = Math.floor(Math.random() * newArray.length - 1) + 1;
        newPassword.push(newArray[randomIndex]);
    }
    return newPassword.join('');
}

function writePassword() {
    let numberOfCharacters = parseInt(prompt('How many characters would you like in your password?'));
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
        alert('Please type a number between 8 and 128.');
        return;
    }
    let specialCharactersQuestion = confirm('Would you like to include special characters? Click OK for yes, cancel for no.');
    let numberQuestion = confirm('Would you like the password to include numbers? Click OK for yes, cancel for no.');
    let lowercaseQuestion = confirm('Would you like the password to include lowercase characters? Click OK for yes, cancel for no.');
    let uppercaseQuestion = confirm('Would you like the password to include uppercase characters? Click OK for yes, cancel for no.');

    if(specialCharactersQuestion) {
        randomPassword.push(specialCharacters);
    }
    if(numberQuestion) {
        randomPassword.push(numbers);
    }
    if(lowercaseQuestion) {
        randomPassword.push(lowercase);
    }
    if(uppercaseQuestion) {
        randomPassword.push(uppercase);
    }

    else if (!specialCharactersQuestion && !numberQuestion && !lowercaseQuestion && !uppercaseQuestion) {
        alert('Please select at least one character type.')
        return;
    }

    let password = generatePassword(randomPassword, numberOfCharacters);

    passwordText.value = password;
}

function copyToClipboard() { 
    let copyPass = document.querySelector('#password');
    copyPass.querySelector();
    document.execCommand("copy");
    alert(`The password ${copyPass.value} has been copied to your clipboard.`)
}

generateBtn.addEventListener('click', writePassword);

copyBtn.addEventListener('click', copyToClipboard);

// // Assignment code here
// const resultEl = document.getElementById('password');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateEl = document.getElementById('generate');

// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol
// };

//   resultEl.innerText = generatePassword(
//     lowercase,
//     uppercase,
//     numbers,
//     symbols,
//     length
//   );
// });

// function generatePassword(lower, upper, number, symbol, length) {

//   let generatedPassword = '';
//   for (let i = 0; i < length; i++) {
//     listOfPossibleChars = [];
//     if (lower) {
//       listOfPossibleChars.push(getRandomLower())
//     }
//     if (upper) {
//       listOfPossibleChars.push(getRandomUpper())
//     }
//     if (number) {
//       listOfPossibleChars.push(getRandomNumber())
//     }
//     if (symbol) {
//       listOfPossibleChars.push(getRandomSymbol())
//     }

//     var randomListOfPossibleChars = listOfPossibleChars.sort(function () {
//       return Math.random - 0.5;
//     });

//     var randomChar = randomListOfPossibleChars.pop();

//     generatedPassword = generatedPassword + randomChar;
//   }

//   console.log(generatedPassword);

//   return generatedPassword;
// }

// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//   const symbols = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {

//   var length = window.prompt("Enter a number from 8 to 128 for password length.");
//   var lowercase = window.confirm("Would you like to use lowercase letters?");
//   var uppercase = window.confirm("Would you like to use uppercase letters?");
//   var symbols = window.confirm("Would you like to use symbols?");
//   var numbers = window.confirm("Would you like to use numbers?");

//   var password = generatePassword(lowercase, uppercase, numbers, symbols, length);
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);