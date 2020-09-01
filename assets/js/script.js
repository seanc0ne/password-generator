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

generateBtn.addEventListener('click', writePassword);