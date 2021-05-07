/*GIVEN I need a new, secure password
WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria THEN I select which criteria to include in the password
WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered THEN a password is generated that matches the selected criteria
WHEN the password is generated THEN the password is either displayed in an alert or written to the page*/

// Assignment code here
// Character type objects
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = lowercase.map(
  function (upperCase) {
    return upperCase.toUpperCase();
  });
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["\!", "\"", "\#", "\$", "\%", "\'", "\(", "\)", "\*", "\+", "\-", ".", "\/", "\:", "\;", "\<", "\=", "\>", "\?", "\@", "\[", "\]", "\^", "\_", "\`", "\{", "\|", "\}", "\~"];

console.log(lowercase);
console.log(uppercase);
console.log(numeric);
console.log(special);



// Criteria to generate random password
var generatePassword = function () {
  // Prompt the user to select character types to be included in password generation
  // Lowercase character inclusion
  var confirmLowercase = window.confirm("Would you like to include lowercase characters in your password?");
  // If yes (true), save value
  if (confirmLowercase) {
    confirmLowercase = lowercase;
  } else {
    // If no (false), move to next prompt
    confirmLowercase = false;

    console.log(confirmLowercase);
  }
  // Uppercase character inclusion
  var confirmUppercase = window.confirm("Would you like to include uppercase characters in your password?");
  if (confirmUppercase) {
    confirmUppercase = uppercase;
  } else {
    // If no (false), move to next prompt
    confirmUppercase = false;
    
    console.log(confirmUppercase);
  }
  // Numeric character inclusion
  var confirmNumeric = window.confirm("Would you like to include numeric characters in your password?");
  if (confirmNumeric) {
    confirmNumeric = numeric;
  } else {
    // If no (false), move to next prompt
    confirmNumeric = false;
    
    console.log(confirmNumeric);
  }
  // Special character inclusion
  var confirmSpecial = window.confirm("Would you like to include special characters in your password?");
  if (confirmSpecial) {
    confirmSpecial = special;
  } else {
    // If no (false), move to next prompt
    confirmSpecial = false;
    
    console.log(confirmSpecial);
  }
}

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);