/*
WHEN all prompts are answered THEN a password is generated that matches the selected criteria
WHEN the password is generated THEN the password is either displayed in an alert or written to the page
*/

// Assignment code here
// Character type objects
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "0123456789";
var special = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";

// Function to generate random password
var generatePassword = function () {
  // Prompt the user to select character types to be included in password generation
  var confirmLowercase = window.confirm("Would you like to include lowercase characters in your password?");
  var confirmUppercase = window.confirm("Would you like to include uppercase characters in your password?");
  var confirmNumeric = window.confirm("Would you like to include numeric characters in your password?");
  var confirmSpecial = window.confirm("Would you like to include special characters in your password?");
  
  // Prompt user to specify number of characters
  var characterNumber = window.prompt("How long does your password need to be? You can select values between 8 to 128.");
  // Error if value is out of bounds (THINK ABOUT CANCEL BUTTON AND NON-INTEGER VALUES)
  var characters = parseInt(characterNumber);
  if (characters < 8 || characters > 128) {
    window.alert("Invalid entry! Please enter a whole number between 8 and 128.");
  }

  // Check to confirm at least one prompt has been marked true
  if (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial) {
    window.alert("ERROR! At least one character type must be selected.")
  }

  // Generate random password
  var allCharacters = "";
  // Concat all selected characters into one location
  if (confirmLowercase) {
    allCharacters = allCharacters.concat(lowercase);
  }
  if (confirmUppercase) {
    allCharacters = allCharacters.concat(uppercase);
  }
  if (confirmNumeric) {
    allCharacters = allCharacters.concat(numeric);
  }
  if (confirmSpecial) {
    allCharacters = allCharacters.concat(special);
  }
  console.log(allCharacters);

  // Select random characters for password generation
  password = "";
  for (var characterCount = 0; characterCount < characters; characterCount++) {
    var randomNumber = Math.round(Math.random() * 100);
    var stop = randomNumber%allCharacters.length;
    password = password.concat(allCharacters[stop]);
    console.log(stop);   
  }
  return password;
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