// Assignment code here
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const randomFunc = {
  lower: getRandomLower;
  upper: getRandomUpper;
  number: getRandomNumber;
  symbol: getRandomSymbol;
};

var length = window.prompt("Enter a number from 8 to 128 for password length.");
var lowercase = window.confirm("Would you like to use lowercase letters?");
var uppercase = window.confirm("Would you like to use uppercase letters?");
var symbols = window.confirm("Would you like to use symbols?");
var numbers = window.confirm("Would you like to use numbers?");

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.prompt;
  const hasUpper = uppercaseEl.prompt;
  const hasNumber = numbersEl.prompt;
  const hasSymbol = symbolsEl.prompt;

  resultEl.innertext = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';

  const typesCount = lower + upper + number + symbol;

  constTypesArr = [{lower}, {upper}, {number}, {symbol}].filter(
    item => Object.values(item)[0]
    );

    if(typesCount === 0) {
      return '';
    }

    for(let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];

        generatePassword += randomFunc[funcName]();
      });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// function generatePassword() {
//   var passwordCharSet = "";



//   if (lowercase) {
//     passwordCharSet += key_strings.lowercase;
//   };


//   if (uppercase) {
//     passwordCharSet += key_strings.uppercase;
//   };


//   if (symbols) {
//     passwordCharSet += key_strings.symbol;
//   };


//   if (numbers) {
//     passwordCharSet += key_strings.number;
//   };
//   var password = "";
//   for (let i = 0; i < length; i++) {
//     password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
//   }
//   return password;
// }

// console.log(generatePassword());