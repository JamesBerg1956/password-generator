// create variable of button#generate
var generateBtn = document.querySelector("#generate");

// START writePassword() - function is called by generateBtn.click event listener
function writePassword() {
  //get user password length and convert to integer
  var strPasswordLength = prompt("Enter a password length between 8 - 128 characters");
  var intPasswordLength = parseInt(strPasswordLength);

  //START validate password integer datatype
  if(intPasswordLength){
    //START validate password length
    if(intPasswordLength >= 8 && intPasswordLength <= 128){
      //START prompts user for preferences for characters used
      var boolLowercase = confirm("Use lower case characters?")
      var boolUppercase = confirm("Use upper case characters?");
      var boolNumeric = confirm("Use numeric characters?");
      var boolSpecial = confirm("Use special characters?");
      //END prompts user for preferences for characters used

      //run generatePassword function. Pass user selected password length and character preferences
      var password = generatePassword(intPasswordLength, boolLowercase, boolUppercase, boolNumeric, boolSpecial);
      //create textarea element object
      var passwordText = document.querySelector("#password");

      //display password in textarea element
      passwordText.value = password;
    }
    else{//START validate password length - alert user to bad input
      alert("Please enter a password length between 8 - 128. You entered: " + strPasswordLength);
    }//END validate password length - alert user to bad input
    //END validate password length
  }
  else{// START validate password integer datatype - alert user to bad input
    alert("Please enter a number. You entered: " + strPasswordLength)
  }// END validate password integer datatype - alert user to bad input
  // END validate password integer datatype
}
// END writePassword()
//START generatePassword()
function generatePassword(intPasswordLength, boolLowercase, boolUppercase, boolNumeric, boolSpecial){
  // console.log("intPasswordLength: ", intPasswordLength);
  // console.log("boolLowercase: ", boolLowercase);
  // console.log("boolUppercase: ", boolUppercase);
  // console.log("boolNumeric: ", boolNumeric);
  // console.log("boolSpecial: ", boolSpecial);
  // declare arrays to store sets of characters
  var arrLowerCaseChars = ["a","b","c","d","e","f","g","h","I","j","k","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var arrUpperCaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var arrNumericChars = ["1","2","3","4","5","6","7","8","9"];
  var arrSpecialChars = ["!", "\\", "#", "$", "%", "\&", "\"", "\'", "(", ")", "*", "," , "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]"];

  //declare array which will store final preferred user character set
  var arrUserChars = [];

  //START add user preffered character sets to final user preferred character set
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
  //END add user preffered character sets to final user preferred character set

  //declare blank array for final password string
  var arrPassword = [];
  //console.log("---------------------------------");
  //START iterate through user preferred character set and create ginal password array based on user preferred password length
  for (let index = 0; index < intPasswordLength; index++) {
    //randomly assign a random character from user preferred character set array
    const char = arrUserChars[Math.round(Math.random() * arrUserChars.length)];
    //add character to final password array
    arrPassword.push(char);
  }
  //END iterate through user preferred character set and create ginal password array based on user preferred password length

  //return final password array as string
  return arrPassword.join("");

}
//END generatePassword

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
