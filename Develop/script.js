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

  // Returns enterCharNum function which includes user specified number of characters and error handling for incorrect entries & defines "characters" value for this function
  characters = enterCharNum(confirmLowercase, confirmUppercase, confirmNumeric, confirmSpecial);

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

  // Select random characters for password generation
  password = "";
  var characterCount = 0;
  while (characterCount < characters) {
    var randomNumber = Math.round(Math.random() * 100);
    // Stop is location in the string of the random value
    var stop = randomNumber % allCharacters.length;
    password = password.concat(allCharacters[stop]);
    characterCount++;
    if (characterCount >= characters) {
      break;
    }
    if (confirmLowercase) {
      var randomNumber = Math.round(Math.random() * 100);
      var stop = randomNumber % lowercase.length;
      password = password.concat(lowercase[stop]);
      characterCount++;
      if (characterCount >= characters) {
        break;
      }
    }
    if (confirmUppercase) {
      var randomNumber = Math.round(Math.random() * 100);
      var stop = randomNumber % uppercase.length;
      password = password.concat(uppercase[stop]);
      characterCount++;
      if (characterCount >= characters) {
        break;
      }
    }
    if (confirmNumeric) {
      var randomNumber = Math.round(Math.random() * 100);
      var stop = randomNumber % numeric.length;
      password = password.concat(numeric[stop]);
      characterCount++;
      if (characterCount >= characters) {
        break;
      }
    }
    if (confirmSpecial) {
      var randomNumber = Math.round(Math.random() * 100);
      var stop = randomNumber % special.length;
      password = password.concat(special[stop]);
      characterCount++;
      if (characterCount >= characters) {
        break;
      }
    }
  }
  // Returns password characters up to the character limit the user set to the writePassword function
  return password;
}

var enterCharNum = function (confirmLowercase, confirmUppercase, confirmNumeric, confirmSpecial) {
  // Prompt user to specify number of characters
  var characterNumber = window.prompt("How long does your password need to be? You can select values between 8 to 128.");
  
  // Error if value is out of bounds
  if (characterNumber === "") {
    window.alert("Invalid entry! Please enter a whole number between 8 and 128.");
    return enterCharNum(confirmLowercase, confirmUppercase, confirmNumeric, confirmSpecial);
  }
  if (characterNumber === null) {
    return;
  }

  var characters = parseInt(characterNumber);

  if (characters < 8 || characters > 128 || isNaN(characters)) {
    window.alert("Invalid entry! Please enter a whole number between 8 and 128.");
    return enterCharNum(confirmLowercase, confirmUppercase, confirmNumeric, confirmSpecial);
  }

  // Check to confirm at least one prompt has been marked true
  if (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial) {
    window.alert("ERROR! At least one character type must be selected.")
    return;
  }
  // Returns character value to be used in generatePassword function
  return characters;
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