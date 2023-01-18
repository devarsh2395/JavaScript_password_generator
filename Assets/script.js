// Assignment code here
var generateBtn = document.querySelector("#generate");
var upperCaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseCharacter = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialCharacter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var upperCaseCharacterCheck;
var lowerCaseCharacterCheck;
var numberCheck;
var specialCharacterCheck;
var passwordLength;



function determineLength(){
  passwordLength = prompt ("The Length of password should be from 8 characters and no more than 128 characters. How many characters would you like to have in your password?")
  if (passwordLength>128){
    alert("Password length must be between from 8 characters and no more than 128 characters");
    determineLength();
  }else if (passwordLength<8){
    alert("Password length must be between from 8 characters and no more than 128 characters");
    determineLength();
  }else if (isNaN(passwordLength)){
      alert("Password length must be between from 8 characters and no more than 128 characters");
      determineLength();
  }else {
    alert("We will be asking you 3 questions regarding what types of characters you would like to have in your password.")
  }
  return passwordLength;

}

function determine



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
