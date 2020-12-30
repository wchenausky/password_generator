// Assignment Code

//global variables

//function to get user input using prompts

var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numberValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  ",",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

function getPasswordCriteria() {
  console.log("got here")
  var length = parseInt(prompt("How long would you like your password to be?"));
  
  //conditional statement to validate if input is a number or not. prompt ends if false.
  if (isNaN(length) === true) {
    alert("You need to pick a number please.");
    return;
  }
  //conditional to check if password is at least 8 characters. prompt ends if false.
  if (length <= 8) {
    alert("Your password has to be at least 8 characters.");
    return;
  }
  //conditional to check if passwrod is less than 128 characters. prompt ends if false
  if (length >= 128) {
    alert("Your password must be less than 128 characters.");
    return;
  }
// Variable to store boolean if user wants to lower case letters
  var wantLowerCaseLetters = confirm("Click OK if you want lower case letters");
  // Variable to store boolean if user wants upper case letters
  var wantUpperCaseLetters = confirm("Click OK if you want upper case letters");
  // Variable to store boolean if user wants numbers
  var wantNumberValues = confirm("Click OK if you want numbers");
  //Variable to store boolean if user wants special characters
  var wantSpecialCharacters = confirm("Click OK if you want special characters");

  if (
wantLowerCaseLetters === false &&
wantUpperCaseLetters=== false &&
wantNumberValues === false &&
wantSpecialCharacters === false 
) {
  alert("You have to select at least one character type");
  return;
}

var passwordCriteria = {
  length: length,
  WantLowerCaseLetters: wantLowerCaseLetters,
  wantUpperCaseLetters: wantUpperCaseLetters,
  wantNumberValues: wantNumberValues,
  wantSpecialCharacters: wantSpecialCharacters,
};

return passwordCriteria;
}

function generatePassword() {
  console.log("got here")
  var options = getPasswordCriteria();
  console.log(options)

  var passwordEntry = [];
console.log(passwordEntry)

if (options.wantLowerCaseLetters) {
  for (i = 0 ; i < lowerCaseLetters.length; i++) {
    passwordEntry.push(lowerCaseLetters[i]);
  }
}
if (options.wantSpecialCharacters) {
  for (i = 0; i < specialCharacters.length; i++) {
      passwordEntry.push(specialCharacters[i]);
  }
} 
if (options.wantNumberValues) {
  for (i = 0; i < numberValues.length; i++) {
  passwordEntry.push(numberValues[i]);
  }
}
if (options.wantUpperCaseLetters) {
  for (i = 0; i < upperCaseLetters.length; i++) {
  passwordEntry.push(upperCaseLetters[i]);
  }
}
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log("got here")
