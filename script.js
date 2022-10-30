// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numeric = "0123456789"
var specialChar = "!@#$%^&*+=~<>?,.`{}[]|\/-_;:"

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
console.log(confirmLength);
console.log(typeof confirmLength);
if (!confirmLength || confirmLength < 8 || confirmLength >128) {
  window.alert ("Error: Please enter a a valid value");
  return;
} else {
  console.log(confirmLength);
  console.log(typeof confirmLength)
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



/*   confirmLength = Number(window.prompt ("Enter a Password Length at least 8 characters but no more than 128 characters"));
/*   console.log(confirmLength);
  console.log (typeof confirmLength);
  if (confirmLength < 8 || confirmLength > 128) {
    window.alert ("Must Enter Value 8-128 Characters");
    return;
  } else {
    console.log(confirmLength)
    console.log(typeof confirmLength)
  } */

/* while (confirmLength = NaN || confirmLength < 8 || confirmLength > 128) {
    console.log(confirmLength);
    console.log(typeof confirmLength);
    window.alert ("Must Enter Valid Value to Continue");
    confirmLength = Number(window.prompt ("Enter a Password Length at least 8 characters but no more than 128 characters"));
  }

console.log (confirmLength) */
/*   if (confirmLength >=8 || confirmLength <=128) {
    console.log(confirmLength);
    console.log(typeof confirmLength);
  } */



  
  
 /*  confirmLength = window.prompt ("Enter a Password Length at least 8 characters but no more than 128 characters");
  if (!confirmLength) {
    window.alert ("Must Enter Valid Value to Continue")
  } else if (confirmLength < 8 || confirmLength > 128) {
    window.alert ("Enter Character Amount of at least 8 but no more than 128")
  } else if (confirmLength == typeof specialChar) {
    window.alert ("Must Enter Valid Value to Continue2")
  } else {
    console.log (confirmLength)
    console.log (typeof confirmLength)
  }
   */
  // while (confirmLength > 128 || confirmLength < 8 || !confirmLength || confirmLength != String) {
  //   window.alert ("Must enter valid value to continue");
  //   confirmLength = window.prompt ("Enter a Password Length at least 8 characters but no more than 128 characters");
  // }
  
  // while (confirmLength.value.string || confirmLength > 128 || confirmLength < 8 || !confirmLength) {
  //   window.alert ("Must enter valid value to continue")
  //   confirmLength = window.prompt ("Enter a Password Length at least 8 characters but no more than 128 characters");
  // }
  
  // // while (!confirmLength) {
  //   window.alert ("Must enter valid value to continue")
  //   confirmLength = window.prompt ("Enter a Password Length at least 8 characters but no more than 128 characters");
  // } 
  
  // while (confirmLength < 8 || confirmLength > 128) {
  //   console.log(confirmLength);
  //   window.alert ("Error: Select Value of at least 8 and no more than 128");

  
  // if (typeof uppercase) {
  //   window.alert ("Must enter valid value to continue");
  //   return;
  // }

  // if (confirmLength < 8 || confirmLength > 128) {
  //   console.log(confirmLength);
  //   window.alert ("Error: Select Value of at least 8 and no more than 128");
  //   return;
  // }
  
  
  // if (confirmLength(typeof String) || !confirmLength) {
  //   window.alert ("Must enter a valid value to continue");
  //    return;
  //  } else if (confirmLength < 8 || confirmLength > 128)  {
  //    console.log(confirmLength);
  //    window.alert ("Error: Select Value of at least 8 and no more than 128");
  //    return;
  //  } else {
  //    console.log(confirmLength)
  //  }
  
  // while (confirmLength < 8 || confirmLength > 128)  {
  //   console.log(confirmLength);
  //   window.alert ("Error: Select Value of at least 8 and no more than 128");
  //   confirmLength = window.prompt ("Enter a Password Length at least 8 characters but no more than 128 characters");
  // } 
  

  
  
  // if (confirmLength === typeof String || !confirmLength) {
  //   window.alert ("Must enter a valid value to continue")
  // } /* else if (!confirmLength) {
  //   window.alert ("Must enter a valid value to continue")
  // } */ else while (confirmLength < 8 || confirmLength > 128)  {
  //   console.log(confirmLength);
  //   window.alert ("Error: Select Value of at least 8 and no more than 128");
  //   confirmLength = window.prompt ("Enter a Password Length at least 8 characters but no more than 128 characters");
  // } else if ()


  // console.log(confirmLength);


  // var userChoice1 = window.prompt ("Choose Password Length (8-128 Characters)");
  // var userChoice2 = window.confirm ("Select OK if You Would Like to Include Lowercase Letters in Your Password; If Not, Select Cancel");
  // var userChoice3 = window.confirm ("Select OK if You Would Like to Include Uppercase Letters in Your Password; If Not, Select Cancel");
  // var userChoice4 = window.confirm ("Select OK if You Would Like to Include Numbers in Your Password; If Not, Select Cancel");
  // var userChoice5 = window.confirm ("Select OK if You Would Like to Include Special Characters in Your Password; If Not, Select Cancel");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

