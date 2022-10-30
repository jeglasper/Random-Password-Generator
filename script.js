// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

console.log ("Uppercase Letters Length: " + uppercase.length);
console.log("Lowercase Letters Length: " + lowerCase.length);
console.log("Numbers Length: " + numeric.length);
console.log("Special Characters Length: " + specialChar.length);

function generatePassword () {
  var confirmLength;
  var confirmUpper;
  var confirmLower;
  var confirmNumeric;
  var confirmSpecialChar;

  confirmLength = Number(window.prompt ("How many characters would you like your password to be(8-128 Characters?"));
  if (!confirmLength || confirmLength < 8 || confirmLength > 128) {
    window.alert ("Error: Please enter a a valid value");
    return;
  } else {
    console.log("Password Length: " + confirmLength);
  }

  confirmUpper = window.confirm ("Select OK if you want to include uppercase letters in your password; if not, click Cancel");
  console.log ("UpperCase Letters: " + confirmUpper);
  confirmLower = window.confirm ("Select OK if you want to include lowercase letters in your Password; if not, select Cancel");
  console.log ("LowerCase Letters: " + confirmLower);
  confirmNumeric = window.confirm ("Select OK if you want to include numbers in your password; if not, click Cancel");
  console.log ("Numbers: " + confirmNumeric);
  confirmSpecialChar = window.confirm ("Select OK if you want to include symbols in your password; if not, click Cancel");
  console.log ("Special Characters: " + confirmSpecialChar);

  while (confirmUpper === false && confirmLower === false && confirmNumeric === false && confirmSpecialChar === false) {
    window.alert ("Your password must include at least one of the following: uppercase letter, lowercase letter, number, and/or symbol")
    confirmUpper = window.confirm ("Select OK if you want to include uppercase letters in your password; if not, click Cancel");
    console.log ("UpperCase Letters: " + confirmUpper);
    confirmLower = window.confirm ("Select OK if you want to include lowercase letters in your Password; if not, select Cancel");
    console.log ("LowerCase Letters: " + confirmLower);
    confirmNumeric = window.confirm ("Select OK if you want to include numbers in your password; if not, click Cancel");
    console.log ("Numbers: " + confirmNumeric);
    confirmSpecialChar = window.confirm ("Select OK if you want to include symbols in your password; if not, click Cancel");
    console.log ("Special Characters: " + confirmSpecialChar);
  } 

  var createPassword = []

  if (confirmLower) {
    createPassword = createPassword.concat(lowerCase)
  }

  if(confirmUpper) {
    createPassword = createPassword.concat(uppercase)
  }

  if (confirmNumeric) {
    createPassword = createPassword.concat(numeric)
  }

  if (confirmSpecialChar) {
    createPassword = createPassword.concat(specialChar)
  }

  var randompassword = "";

  for (var i=0; i < confirmLength; i++) {
    randompassword = randompassword + createPassword[Math.floor(Math.random() * createPassword.length)];
  }
  return randompassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("Here's your new password: " + password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

