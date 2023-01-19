
// variables delcared in the global scope

let generateBtn = document.querySelector("#generate");

let upperCaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let lowerCaseCharacter = "abcdefghijklmnopqrstuvwxyz";

let number = "0123456789";

let specialCharacter = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" ;

let upperCaseCharacterCheck = "";

let lowerCaseCharacterCheck = "";

let numberCheck;

let specialCharacterCheck = "";

let passwordLength ="" ;



// function to determine the length



function determineLength(){

  passwordLength = prompt ("The Length of password should be from 8 characters and no more than 128 characters. How many characters would you like to have in your password?");
    
    if (passwordLength>128){
    alert("Password length must be between from 8 characters and no more than 128 characters");
    determineLength();
  
    }else if(passwordLength<8){
      alert("Password length must be between from 8 characters and no more than 128 characters");
      determineLength();


    }else if (isNaN(passwordLength)){
      alert("Password length must be between from 8 characters and no more than 128 characters");
      determineLength();

    }else {
    alert("We will be asking you 4 questions regarding what types of characters you would like to have in your password.");

    }

    return passwordLength;

}

// function determines the lowercase

function determineLowerCaseCharacter() {

  lowerCaseCharacterCheck = prompt ("Do you wish to have Lowercase Letters in your password?\n(Yes or No)");
  lowerCaseCharacterCheck = lowerCaseCharacterCheck.toLowerCase();


  if (lowerCaseCharacterCheck === null || lowerCaseCharacterCheck === "")  {
    alert("Answer in Yes or No");
    determineLowerCaseCharacter();

  }else if (lowerCaseCharacterCheck === "no" || lowerCaseCharacterCheck === "n"){
      lowerCaseCharacterCheck = false;
      return lowerCaseCharacterCheck;

  }else if (lowerCaseCharacterCheck ==="yes" || lowerCaseCharacterCheck ==="y") {
    lowerCaseCharacterCheck = true;
    return lowerCaseCharacterCheck;

  }else  {
    alert("Answer Yes or NO");
    determineLowerCaseCharacter();
  }
  return lowerCaseCharacterCheck;
}


// function to determine Upper Case

function determineUpperCaseCharacter() {

  upperCaseCharacterCheck = prompt ("Do you wish to have Uppercase Letters in your password?\n(Yes or No)");
  upperCaseCharacterCheck = upperCaseCharacterCheck.toLowerCase();


  if (upperCaseCharacterCheck === null || upperCaseCharacterCheck === "")  {
    alert("Answer in Yes or No");
    determineUpperCaseCharacter();

  }else if (upperCaseCharacterCheck === "no" || upperCaseCharacterCheck === "n"){
      upperCaseCharacterCheck = false;
      return upperCaseCharacterCheck;

  }else if (upperCaseCharacterCheck ==="yes" || upperCaseCharacterCheck ==="y") {
    upperCaseCharacterCheck = true;
    return upperCaseCharacterCheck;

  }else  {
    alert("Answer Yes or NO");
    determineUpperCaseCharacter();
  }
  return upperCaseCharacterCheck;
}



// function to determine number


function determineNumber(){
  numberCheck = prompt("Do you wish to have a number in your password? \n(Yes or No");
  numberCheck = numberCheck.toLowerCase();

  if (numberCheck === null || numberCheck === "")  {
    alert("Answer in Yes or No");
    determineNumber();

  }else if (numberCheck === "no" || numberCheck === "n"){
      numberCheck = false;
      return numberCheck;

  }else if (numberCheck ==="yes" || numberCheck ==="y") {
    numberCheck = true;
    return numberCheck;


  }else  {
    alert("Answer Yes or NO");
    determineNumber();
  }
  return numberCheck;
}


// function to determine special character.


function determineSpecialCharacter () {
  specialCharacterCheck = prompt ("Do you wish to have a special character in your password? \n(Yes or No");
  specialCharacterCheck = specialCharacterCheck.toLowerCase();


  if (specialCharacterCheck === null || specialCharacterCheck === "")  {
    alert("Answer in Yes or No");
    determineSpecialCharacter();

  }else if (specialCharacterCheck === "no" || specialCharacterCheck === "n"){
    specialCharacterCheck = false;
    return specialCharacterCheck;


  }else if (specialCharacterCheck ==="yes" || specialCharacterCheck ==="y") {
    specialCharacterCheck = true;
    return specialCharacterCheck;


  }else  {
    alert("Answer Yes or NO");
    determineSpecialCharacter();
}


return specialCharacterCheck;
}



// function for generating password

function generatePassword() {

  determineLength();
  console.log(passwordLength);
  
  determineLowerCaseCharacter();
  console.log(lowerCaseCharacterCheck);

  determineUpperCaseCharacter();
  console.log(upperCaseCharacterCheck);

  determineNumber();
  console.log(numberCheck);

  determineSpecialCharacter();
  console.log(specialCharacterCheck);




  let character = "";
  let password = "";
if (lowerCaseCharacterCheck && upperCaseCharacterCheck && numberCheck && specialCharacterCheck) {
  character += lowerCaseCharacter + upperCaseCharacter + number + specialCharacter;

}else if (upperCaseCharacterCheck && numberCheck && specialCharacterCheck) {
  character += upperCaseCharacter + number + specialCharacter;

}else if (upperCaseCharacterCheck && numberCheck){
  character += upperCaseCharacter + number;

}else if (upperCaseCharacterCheck && specialCharacterCheck){
  character += upperCaseCharacter + specialCharacter;

}else if (upperCaseCharacterCheck){
  character += upperCaseCharacter;

}else if (number && specialCharacterCheck){
  character += number + specialCharacter;

}else if (specialCharacterCheck) {
  character += specialCharacter;

}else if(numberCheck){
  character += number;

}else {
  character === lowerCaseCharacter;
}

for(let i = 0; i < passwordLength; i++){
  password += character.charAt(Math.floor(Math.random() * character.length));
}
return password;

}






// Get references to the #generate element

 generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  let passwordCreate = "";
  passwordCreate = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = passwordCreate;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
