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

passwordLengthUserInput = prompt(`Let's set the password length \n\n Choose a number between 8 and 128 \n `);

console.log(passwordLengthUserInput);

// Creates an array of the values of the object
console.log(`object values ${Object.values(passwordLengthUserInput)}`)

console.log(`object typeof ${typeof Object.values(passwordLengthUserInput)}`)

console.log(`input typeof ${typeof passwordLengthUserInput}`)

// if (passwordLengthUserInput != "string") {

// } else {

// }

passwordCapitalLetters = confirm(`Now, please indicate if you want capital letters to be included: \n 'OK' = Yes, select 'Cancel' for No
`);

console.log(passwordCapitalLetters);

passwordNumbers = confirm(`Now, please indicate if you want numbers to be included: \n 'OK' = Yes, select 'Cancel' for No
`);

console.log(passwordNumbers)

passwordSpecialCharacters = confirm(`Now, please indicate if you want special characters to be included: \n 'OK' = Yes, select 'Cancel' for No
`);

console.log(passwordSpecialCharacters)

if (passwordCapitalLetters && passwordNumbers && passwordSpecialCharacters) {
  console.log(`You have opted to have a password with Capital Letters, Numbers and Special Characters \n`);
} else if (!passwordCapitalLetters && !passwordNumbers && !passwordSpecialCharacters) {
  console.log(`You have opted to not have any Capital Letters, Numbers or Special Characters in the generated password \n`);
} else if (passwordCapitalLetters && !passwordNumbers && passwordSpecialCharacters) {
  console.log(`You have opted to have a password with Capital Letters and Special Characters but No Numbers \n`);
} else if (passwordCapitalLetters && passwordNumbers && !passwordSpecialCharacters) {
  console.log(`You have opted to have Numbers and Capital Letters but no Special Characters password \n`);
} else if (!passwordCapitalLetters && !passwordNumbers && passwordSpecialCharacters) {
  console.log(`You have opted to have a password with Special Characters but No Numbers or Capital Letters\n`);
} else if (!passwordCapitalLetters && passwordNumbers && !passwordSpecialCharacters) {
  console.log(`You have opted to have Numbers but no Capital Letters or Special Characters set within the generated password \n`);
}  else if (passwordCapitalLetters && !passwordNumbers && !passwordSpecialCharacters) {
  console.log(`You have opted to have a password generated with Capital Letters but without Numbers or Special Characters \n`);
} 

function getPasswordOptions() {
  console.log("Hello, I am a function declaration called getPasswordOptions.");
  console.log("-----------------------------------");
  // Return stops the execution of a function
  return;
}

// Function Execution
// =======================================================================================

getPasswordOptions()

// Function for getting a random element from an array
// =======================================================================================


function getRandom(arr) {
  console.log("Hello, I am a function declaration called getRandom.");
  console.log("-----------------------------------");
  // Return stops the execution of a function
  return;
}

// Function Execution
// =======================================================================================
getRandom()

// Function to generate password with user input
// =======================================================================================

alert(`Your password has been generated \n \n ${generatePassword}`) // not sure this is correct.

function generatePassword() {
  console.log("Hello, I am a function declaration called generatePassword.");
  console.log("-----------------------------------");
  // Return stops the execution of a function
  return;
}


// Function Execution
// =======================================================================================
generatePassword()

// Get references to the #generate element
// =======================================================================================

var generateBtn = document.querySelector('#generate');

// Write password to the #password input
// =======================================================================================

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  console.log("Hello, I am a function declaration called writePassword.");
  console.log("-----------------------------------");
  // Return stops the execution of a function
  return;
}


// Function Execution
// =======================================================================================

writePassword()

// Add event listener to generate button
// =======================================================================================

generateBtn.addEventListener('click', writePassword);