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


function getPasswordOptions() {
  console.log("Hello, I am a function declaration called getPasswordOptions.");
  console.log("-----------------------------------");
  //!  =======================================
  //!  PROMPTS FOR USER INPUT - allow user to indicate their password preference

  //=======================================
  // This will display a prompt asking the user to enter a number. The parseInt() function will then convert the string entered by the user to an integer. If the user enters a non-numeric value, isNaN() will return true, and  passwordLengthUserInput = passwordMinimumLength will be assigned to passwordLengthUserInput // 13
  
  //  Arrays for user input
  //  =======================================

  var passwordLengthUserInput = parseInt(prompt(`\n\t Let's set the password length \n\n Choose a number between 8 and 128 \n `));
  
  if (isNaN(passwordLengthUserInput)) {
    passwordLengthUserInput = 13; // passwords will be 13 characters if user inputs a wrong character.
    alert("The character inputted is not a number.\n The password length has been set to 13.")
  
  //TODO check that whatever is inputted is also between 8 and 128.
  
  } else if (passwordLengthUserInput < 8 || passwordLengthUserInput > 128) {
    passwordLengthUserInput = 13;
    alert("The number inputted was not between 8 and 128.\n The password length has been set to 13.")
  };
  
  //=======================================
  
  let passwordCapitalLetters = confirm(`Now, please indicate if you want capital letters to be included: \n 'OK' = Yes, select 'Cancel' for No`);
  
  //=======================================

  let passwordNumbers = confirm(`Now, please indicate if you want numbers to be included: \n 'OK' = Yes, select 'Cancel' for No`);
  
  //=======================================
  
  let passwordSpecialCharacters = confirm(`Now, please indicate if you want special characters to be included: \n 'OK' = Yes, select 'Cancel' for No`);
  
  //!=======================================
  //!  Code to determine how password Array will be populated with characters based on user input

  if (passwordCapitalLetters && passwordNumbers && passwordSpecialCharacters) {
    alert(`You have opted to have a password with Capital Letters, Numbers and Special Characters \n`);
    var passwordArray = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters, specialCharacters);

    //====================================

  } else if (!passwordCapitalLetters && !passwordNumbers && !passwordSpecialCharacters) {
    alert(`You have opted to not have any Capital Letters, Numbers or Special Characters in the generated password \n`);
    var passwordArray = lowerCasedCharacters;

    //====================================

  } else if (passwordCapitalLetters && !passwordNumbers && passwordSpecialCharacters) {
    alert(`You have opted to have a password with Capital Letters and Special Characters but No Numbers \n`);
    var passwordArray = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters);

    //====================================

  } else if (passwordCapitalLetters && passwordNumbers && !passwordSpecialCharacters) {
    alert(`You have opted to have Numbers and Capital Letters but no Special Characters password \n`);
    var passwordArray = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters);
    
    // ===================================

  } else if (!passwordCapitalLetters && !passwordNumbers && passwordSpecialCharacters) {
    alert(`You have opted to have a password with Special Characters but No Numbers or Capital Letters\n`);
    var passwordArray = lowerCasedCharacters.concat(specialCharacters);

    // ===================================

  } else if (!passwordCapitalLetters && passwordNumbers && !passwordSpecialCharacters) {
    alert(`You have opted to have Numbers but no Capital Letters or Special Characters set within the generated password \n`);
    var passwordArray = lowerCasedCharacters.concat(numericCharacters);
    
    // ===================================

  }  else if (passwordCapitalLetters && !passwordNumbers && !passwordSpecialCharacters) {
    alert(`You have opted to have a password generated with Capital Letters but without Numbers or Special Characters \n`);
    var passwordArray = lowerCasedCharacters.concat(upperCasedCharacters);
  } 
  // END OF CODE TO POPULATE DATA INTO PASSWORD ARRAY
  
  // Return stops the execution of a function
  return passwordArray;
}

// Function Execution
// =======================================================================================

// getPasswordOptions()


// //!=======================================================================================
// //! 

// watch this if you want to have a laugh - 
// dcode (2021) If Math.random() Was a Human - JavaScript - https://www.youtube.com/watch?v=ZjRDkHarB1g

// resource used to assist with this part 
// Bill Barnum (2019) Random Numbers With Math.random() (Java Tutorial) https://www.youtube.com/watch?v=Q9LIxVENfLU
// Bro Code (2022) Random number generator in JavaScript 🎲【4 minutes】 https://www.youtube.com/watch?v=UZqSpuUJPa0
// mrGcoding (2020) JavaScript - Randomize Items In An Array https://www.youtube.com/watch?v=seApG3uwjAs


// console.log(passwordArray);
// console.log(passwordArray.Length - 1);

var tryAgain = getPasswordOptions()

var keys = Object.keys(tryAgain);

console.log(keys)
console.log(Math.floor(Math.random() * keys.length));

for (var k in tryAgain) {
  k = Math.floor(Math.random() * keys.length);
  var tempCharacter = tryAgain[k];
};


// Object.length undefined in javascript [duplicate] - https://stackoverflow.com/questions/30861631/object-length-undefined-in-javascript

// for (var l = 0; l < keys.length; l++) {
//   var tempCharacter = passwordArray[keys[l]]; 
//   var randomIndex = Math.floor((Math.random() * passwordLengthUserInput));
//   passwordArray[j] = passwordArray[randomIndex];
//   passwordArray[randomIndex] = tempCharacter;
// };

// let randNum = passwordArray[Math.floor(Math.random()* passwordArray.Length)]

// console.log(randNum)

// let index3 = passwordLengthUserInput
// let array3 = Math.ceil(Math.random()*index3)
// console.log(array3)

// arr = 1.75 // ensure that the math random is always calculating a number, trouble if user does not input any character, what will happen with the random element of the code?

// math.ceil(math.random * arr += passwordUserInput.length)


// // Check that UserInput is a number

// function checkIndex() {
//   for (let i=0; i< passwordLengthUserInput.length; i++) {
//       if (passwordLengthUserInput < 8 || passwordLengthUserInput > 128) {
//           console.log( ` ${passwordLengthUserInput} is outside of bounds`)
//       } else if (passwordLengthUserInput => 8 || passwordLengthUserInput <= 128){
//           console.log(` ${passwordLengthUserInput } is between 8 and 128`)
//       // i think that the password generator needs a statement to exclude non-numerical values. I intend for the code to default to 13 characters. 
//       } else {
//         console.log( ` ${passwordLengthUserInput} is outside of bounds2`)
//       } 
//   }
// }
// // FUNCTION CALLS (Execution) 
// // =======================================================================================

// checkIndex();



// // Function for getting a random element from an array
// // =======================================================================================


// // function getRandom(arr) {
// //   console.log("Hello, I am a function declaration called getRandom.");
// //   console.log("-----------------------------------");
// //   // Return stops the execution of a function
// //   return math.ceil(math.random() * passwordLengthUserInput);
// // }

// //arr = 1.75 // ensure that the math random is always calculating a number, trouble if user does not input any character, what will happen with the random element of the code?

// let math = 0;

// /*arr* += */

// // console.log(math.ceil(math.random() * passwordLengthUserInput[0]))



// // Function Execution
// // =======================================================================================
// getRandom()


// // Function to generate password with user input
// // =======================================================================================

// alert(`Your password has been generated \r ${generatePassword}`) // not sure this is correct.

// function generatePassword() {
//   console.log("Hello, I am a function declaration called generatePassword.");
//   console.log("-----------------------------------");
//   // Return stops the execution of a function
//   return;
// }

// console.log(passwordArray.find(function(i) {
//   let passwordGenerate = passwordGenerate.concat(passwordArray[i])
//   return passwordGenerate
// }))
// // Function Execution
// // =======================================================================================
// generatePassword()

// // Get references to the #generate element
// // =======================================================================================

// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// // =======================================================================================

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
//   console.log("Hello, I am a function declaration called writePassword.");
//   console.log("-----------------------------------");
//   // Return stops the execution of a function
//   return;
// }


// // Function Execution
// // =======================================================================================

// writePassword()

// // Add event listener to generate button
// // =======================================================================================

// generateBtn.addEventListener('click', writePassword);


// */