James Berg
password-generator

This project will allow the user to randomly generate a password with the options to indicate the password length, whether or not to include numbers, and whether or not to include non-standard characters. The following tasks will be performed

## pseudocode
prompt user for password length 
    if user enter < 8 && > 128 display alert and end processing
confirm user for lowercase alpha characters (ok, cancel)
confirm user for uppercase alpha characters (ok, cancel)
confirm user for numeric characters (ok, cancel)
confirm user for special characters (ok, cancel)

create array of all lowercase alpha characters
create array of all uppercase alpha characters
create array of all numeric characters
create array of all special characters

create empty array to store list of characters selected by user

add contents of arrays chosen by user to empty array

create empty array to store randomized password

loop through array with user selected character set and randomly assign a character to the new array

new array.toString()
display password string on page

## pseudocode detail

function generatePassword(){

    var lowercaseChars["a","b","c","d","e","f","g","h","I","j","k","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    var uppercaseChars["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    var numericChars["1","2","3","4","5","6","7","8","9"];

    var specialChars["!", "\" , "#" , "$" , "%" , "\&" , "\"" , "\'" , "(" , ")" , "*" , "\\" , "," , "-" ,"." , "/" , ":" , ";" , "<" , "=" , ">" , "?" , "@" , "[" , "\" , "]"];

    if (lowercase){
        userCharacters.concat(lowercaseChars);
    }
    if (uppercase){
        userCharacters.concat(uppercaseChars);
    }
    if (numeric){
        userCharacters.concat(numericChars);
    }
    if (special){
        userCharacters.concat(specialChars);
    }

    var passwordArray[];
    for(i=0; i < userCharacters.length; i++){
        var randomChar = Math.Round(Math.Random() * userCharacters.length);

        passwordArray.push(randomChar);
    }

    return passwordArray.toString();
}

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page