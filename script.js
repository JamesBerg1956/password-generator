// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var strPasswordLength = prompt("Enter a password length between 8 - 128 characters");
  var intPasswordLength = parseInt(strPasswordLength);

  if(intPasswordLength){

    if(intPasswordLength >= 8 && intPasswordLength <= 128){
      
      var boolLowercase = confirm("Use lower case characters?")
      var boolUppercase = confirm("Use upper case characters?");
      var boolNumeric = confirm("Use numeric characters?");
      var boolSpecial = confirm("Use special characters?");

      //run generatePassword function
      var password = generatePassword(intPasswordLength, boolLowercase, boolUppercase, boolNumeric, boolSpecial);
      //create textarea element object
      var passwordText = document.querySelector("#password");

      //display password in textarea element
      passwordText.value = password;
    }
    else{
      alert("Please enter a password length between 8 - 128. You entered: " + strPasswordLength);
    }
  }
  else{
    alert("Please enter a number. You entered: " + strPasswordLength)
  }
  
}

function generatePassword(intPasswordLength, boolLowercase, boolUppercase, boolNumeric, boolSpecial){
  console.log("intPasswordLength: ", intPasswordLength);
  console.log("boolLowercase: ", boolLowercase);
  console.log("boolUppercase: ", boolUppercase);
  console.log("boolNumeric: ", boolNumeric);
  console.log("boolSpecial: ", boolSpecial);

  var arrLowerCaseChars = ["a","b","c","d","e","f","g","h","I","j","k","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var arrUpperCaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var arrNumericChars = ["1","2","3","4","5","6","7","8","9"];
  var arrSpecialChars = ["!", "\\", "#", "$", "%", "\&", "\"", "\'", "(", ")", "*", "," , "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]"];

  var arrUserChars = [];

  if(boolLowercase){ 
    arrUserChars = arrUserChars.concat(arrLowerCaseChars); 
  }
  if(boolUppercase){
    arrUserChars = arrUserChars.concat(arrUpperCaseChars);
  }
  if(boolNumeric){
    arrUserChars = arrUserChars.concat(arrNumericChars);
  }
  if(boolSpecial){
    arrUserChars = arrUserChars.concat(arrSpecialChars);
  }

  for (let index = 0; index < arrUserChars.length; index++) {
    const element = arrUserChars[index];
    console.log(element);
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
