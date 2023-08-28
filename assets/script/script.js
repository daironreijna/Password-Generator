// start with clearing the console.
// =======================================================================================
console.clear()


// Array of special characters to be included in password
// =======================================================================================
const specialCharacters = [
  '@',   '%',   '+',  '\\', '/', "'", '!',  '#',  '$',  '^',
  '?',   ':',   ',',  ')',  '(', '}', '{',  ']',  '[',   '~',
  '-',   '_',   '.'
];

// Array of numeric characters to be included in password
// =======================================================================================
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
// =======================================================================================
const lowerCasedCharacters = [
  'a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',  'i',  'j',  'k',  'l',
  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',
  'y',  'z'
];

// Array of uppercase characters to be included in password
// =======================================================================================
let upperCasedCharacters = [
  'A',  'B',  'C',  'D',  'E',  'F',  'G',  'H',  'I',  'J',  'K',  'L',
  'M',  'N',  'O',  'P',  'Q',  'R',  'S',  'T',  'U',  'V',  'W',  'X',
  'Y',  'Z'
];

// Setup of variable containers

const passwordMinimumLength = 13; // passwords will always be 13 if user inputs a wrong character.
let passwordLengthUserInput;
let passwordCapitalLetters;
let passwordNumbers;
let passwordSpecialCharacters;

// Function to prompt user for password options
// =======================================================================================

passwordLength = prompt(`Let's set the password length \n\n Choose a number between 8 and 128 \n `);

console.log(passwordLength);

passwordCapitalLetters = confirm(`Now, please indicate if you want capital letters to be included: \n 'OK' = Yes, select 'Cancel' for No
`);

console.log(passwordCapitalLetters);

passwordNumbers = confirm(`Now, please indicate if you want numbers to be included: \n 'OK' = Yes, select 'Cancel' for No
`);

console.log(passwordNumbers)

passwordSpecialCharacters = confirm(`Now, please indicate if you want special characters to be included: \n 'OK' = Yes, select 'Cancel' for No
`);

console.log(passwordSpecialCharacters)

function getPasswordOptions() {

}

// Function for getting a random element from an array
// =======================================================================================


function getRandom(arr) {

}

// Function to generate password with user input
// =======================================================================================

alert(`Your password has been generated \n \n ${generatePassword}`) // not sure this is correct.

function generatePassword() {

}

// Get references to the #generate element
// =======================================================================================

var generateBtn = document.querySelector('#generate');

// Write password to the #password input
// =======================================================================================

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
// =======================================================================================

generateBtn.addEventListener('click', writePassword);