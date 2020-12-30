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
  var length = parseInt(prompt("How long would you like your password to be?"));

  //conditional statement to validate if input is a number or not. prompt ends if false.
  if (isNaN(length) === true) {
    alert("You need to pick a number please.");
    return;
  }
  //conditional to check if password is at least 8 characters. prompt ends if false.
  if (length < 8) {
    alert("Your password has to be at least 8 characters.");
    return;
  }
  //conditional to check if passwrod is less than 128 characters. prompt ends if false
  if (length > 129) {
    alert("Your password must be less than 128 characters.");
    return;
  }
// Variable to store boolean if user wants to lower case letters
  var wantLowerCaseLetters = confrim("Click OK if you want lower case letters");
  // Variable to store boolean if user wants upper case letters
  var wantUpperCaseLetters = confrim("Click OK if you want upper case letters");
  // Variable to store boolean if user wants numbers
  var wantNumberValues = confrim("Click OK if you want numbers");
  //Variable to store boolean if user wants special characters
  var wantSpecialCharacters = confrim("Click OK if you want special characters");

  if (
wantLowerCaseLetters === false &&
wantUpperCaseLetters=== false &&
wantNumberValues === false &&
wantSpecialCharacters === false 
) {
  alert("you have to select at least one character type");
  return;
}

var passwordCriteria ={
  length: length,
  wantLowerCaseLetters: wantLowerCaseLetters,
  wantUpperCaseLetters: wantUpperCaseLetters,
  wantNumberValues: wantNumberValues,
  wantSpecialCharacters: wantSpecialCharacters,
};

return passwordCriteria;
}

function createPassword() {
  var options = getPasswordCriteria();
  console.log(options)

  var passwordEntry = [];
console.log(passwordEntry)

if (options.lowerCaseLetters) {
  for (i =0 ; i < wantLowerCaseLetters.length; ++i) {
    passwordEntry.push(wantLowerCaseLetters[i]);
  }
}
if (options.specialCharacters) {
  for (i = 0; i < wantSpecialCharacters.length; ++i) {
      passwordEntry.push(wantSpecialCharacters[i]);
  }
} 
if (options.numberValues) {
  for (i = 0; i < wantNumberValues.length; ++i) {
  passwordEntry.push(wantNumberValues[i]);
  }
}
if (options.upperCaseLetters) {
  for (i = 0; i < wantUpperCaseLetters.length; ++i) {
  passwordEntry.push(wantUpperCaseLetters[i]);
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
}
