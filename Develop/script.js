// Assignment Code

//global variables

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
//function to get user input using prompts
function getPasswordCriteria() {
  var length = parseInt(prompt("How long would you like your password to be?"));

  //conditional statement to validate if input is a number or not. prompt ends if false.
  if (isNaN(length) === true) {
    alert("You need to ick a number please.");
    return;
  }
  //conditional to check if password is at least 8 characters. prompt ends if false.
  if (length < 8) {
    alert("Your password has to be at least 8 characters.");
    return;
  }
  //conditional to check if passwrod is less than 128 characters. prompt ends if false
  if (length > 128) {
    alert("Your password must be less than 128 characters.");
    return;
  }
// Variableto store boolean if user wants to lower case letters
  var wantLowerCaseLetters = confrim("Click OK if you want lower case letters");
  // Variable to store boolean if user wants upper case letters
  var wantUpperCaseLetters = confrim("Click OK if you want upper case letters");
  // Variable to store boolean if user wants numbers
  var numberValues = confrim("Click OK if you want numbers");
  //Variable to store boolean if user wants special characters
  var specialCharacters = confrim("Click OK if you want special characters");

  if (
wantLowerCaseLetters === false &&
wantUpperCaseLetters=== false &&
numberValues === false &&
specialCharacters === false 
) {
  alert("you have to select at least one character type")
}

var passwordCriteria ={
  length: length,
  wantLowerCaseLetters: wantLowerCaseLetters,
  wantUpperCaseLetters: wantUpperCaseLetters,
  numberValues: numberValues,
  specialCharacters: specialCharacters,
};

return passwordCriteria;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
