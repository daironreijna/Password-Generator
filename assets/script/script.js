// User view
/*
User will visit website and will see a container/card with a heading, a prompt, and a button to generate a password.
The user will click the generate a password button.

How long due you want the password to be?

Do you want capital letters in the password?
Do you want numbers to be generated in the password?

Would you like special characters in the password?

Alert - The user will receive an output from the webpage with a password that has been generated.

(the output from this round would be a wireframe of the website to be built, with relevant elements incorporated)


// What developer has to do
// ============================================

Make button clickable.

A prompt that will request for password length.
Check to make sure appropriate number (value and type) has been entered by user.

second 'confirm' to request - if characters should include capitalisation.
if true then yes added within generated password.
if false then none added

3rd 'confirm' to request - if user wants characters to include numbers.
if true then yes added within generated password.
if false then none added

4th and last 'confirm' to ask user if they would like special characters within the generated password.
if true then yes added within generated password.
if false then none added

An alert provides the user with the generated password. 

(Options are prompt - alert or confirm.) 


// tools to accomplish above tasks.
// =========================================
1. generate password button should call a function
2. Prompt to request password length
3. Confirm for user to decide inclusion of capital letters
  Add to potential characters that can be choosed from.
4. Confirm for user to decide inclusion of numbers
  Add to potential characters that can be choosed from.
5. Confirm for user to decide inclusion of special characters
  Add to potential characters that can be choosed from.
6. Alert to user 

7. create an array that will allow the relevant function/code to call from, and pull potentialCharacters for the generatedPassword.
  so atleast I need one array
8. using a for loop to iterate over the new array, in order to generate the new password. 

Return math.ceil(Math.random() * userInput)

And use this to iterate over the array.index to get the characters you need.

*/

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);