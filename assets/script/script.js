// start with clearing the console.
// =======================================================================================

console.clear()

//!=======================================================================================
//! INITIAL SETUP OF ARRAYS

// Array of special characters to be included in password
// =======================================================================================

const specialCharacters = [
  '@',   '%',   '+',  '\\', '/', "'", '!',  '#',  '$',  '^', '?',   ':',   ',',  ')',  '(', '}', '{',  ']',  '[',   '~', '-',   '_',   '.' ];

// Array of numeric characters to be included in password
// =======================================================================================

const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
// =======================================================================================
const lowerCasedCharacters = [
  'a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',  'i',  'j',  'k',  'l', 'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x', 'y',  'z'];

// Array of uppercase characters to be included in password
// =======================================================================================

let upperCasedCharacters = [
  'A',  'B',  'C',  'D',  'E',  'F',  'G',  'H',  'I',  'J',  'K',  'L', 'M',  'N',  'O',  'P',  'Q',  'R',  'S',  'T',  'U',  'V',  'W',  'X',  'Y',  'Z'];

// Arrays for user input
// =======================================================================================

const passwordMinimumLength = 13; // passwords will always be 13 if user inputs a wrong character.
let passwordLengthUserInput;
let passwordCapitalLetters;
let passwordNumbers;
let passwordSpecialCharacters;
let passwordArray;

//!=======================================================================================
//!  PROMPTS FOR USER INPUT - allow user to indicate their password preference

//========================================================================================
// This will display a prompt asking the user to enter a number. The parseInt() function will then convert the string entered by the user to an integer. If the user enters a non-numeric value, isNaN() will return true, and  passwordLengthUserInput = passwordMinimumLength will be assigned to passwordLengthUserInput // 13

passwordLengthUserInput = parseInt(prompt(`\n\t Let's set the password length \n\n Choose a number between 8 and 128 \n `));

if (isNaN(passwordLengthUserInput)) {
  passwordLengthUserInput = passwordMinimumLength;
  alert("The character inputted is not a number.\n The password length has been set to 13.")

//TODO check that whatever is inputted is also between 8 and 128.

} else if (passwordLengthUserInput < 8 || passwordLengthUserInput > 128) {
  alert("The number inputted was not between 8 and 128.\n The password length has been set to 13.")
};

//========================================================================================

passwordCapitalLetters = confirm(`Now, please indicate if you want capital letters to be included: \n 'OK' = Yes, select 'Cancel' for No`);

//========================================================================================

passwordNumbers = confirm(`Now, please indicate if you want numbers to be included: \n 'OK' = Yes, select 'Cancel' for No`);

//========================================================================================

passwordSpecialCharacters = confirm(`Now, please indicate if you want special characters to be included: \n 'OK' = Yes, select 'Cancel' for No`);

//!=======================================================================================
//!  Code to determine how password Array will be populated with characters based on user input

if (passwordCapitalLetters && passwordNumbers && passwordSpecialCharacters) {
  alert(`You have opted to have a password with Capital Letters, Numbers and Special Characters \n`);
  passwordArray = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters, specialCharacters);

  //====================================

} else if (!passwordCapitalLetters && !passwordNumbers && !passwordSpecialCharacters) {
  alert(`You have opted to not have any Capital Letters, Numbers or Special Characters in the generated password \n`);
  passwordArray = lowerCasedCharacters;

  //====================================

} else if (passwordCapitalLetters && !passwordNumbers && passwordSpecialCharacters) {
  alert(`You have opted to have a password with Capital Letters and Special Characters but No Numbers \n`);
  passwordArray = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters);

  //====================================

} else if (passwordCapitalLetters && passwordNumbers && !passwordSpecialCharacters) {
  alert(`You have opted to have Numbers and Capital Letters but no Special Characters password \n`);
  passwordArray = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters);
  
  // ===================================

} else if (!passwordCapitalLetters && !passwordNumbers && passwordSpecialCharacters) {
  alert(`You have opted to have a password with Special Characters but No Numbers or Capital Letters\n`);
  passwordArray = lowerCasedCharacters.concat(specialCharacters);

  // ===================================

} else if (!passwordCapitalLetters && passwordNumbers && !passwordSpecialCharacters) {
  alert(`You have opted to have Numbers but no Capital Letters or Special Characters set within the generated password \n`);
  passwordArray = lowerCasedCharacters.concat(numericCharacters);
  
  // ===================================

}  else if (passwordCapitalLetters && !passwordNumbers && !passwordSpecialCharacters) {
  alert(`You have opted to have a password generated with Capital Letters but without Numbers or Special Characters \n`);
  passwordArray = lowerCasedCharacters.concat(upperCasedCharacters);
} 
// END OF CODE TO POPULATE DATA INTO PASSWORD ARRAY