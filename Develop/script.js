// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
// prompt user for character count 8-128 characters 

var charChoice = prompt("Enter desired number of characters from 8-128");

if (charChoice < 8 || charChoice > 128){
  alert('Please enter a vaild input')
  return
}
// prompt user for lower case characters

var lowerChoice = confirm("Do you want to use Lower Case characters?");

// prompt user for upper case characters 

var upperChoice = confirm("Do you want to use Upper Case characters?");

// prompt user for numeric characters

var numericChoice = confirm("Do you want to use numbers?");

// prompt user for special characters

var specChoice = confirm("Do you want to use special characters?");

if (!lowerChoice && !upperChoice && !numericChoice && !specChoice){
  alert('Please choose a valid option.')
  return
}
// apply user choices to build password 

var charset = ''
var upperCase = 'QWERETYUIOPASDFGHJKLZXCVBNM'
var lowerCase = 'qwertyuiopasdfghjklzxcvbnm'
var specialCase = '!@#$%^&*()'
var numberCase = '0123456789'
var newChar = ''

if (lowerChoice){
  charset += lowerCase
}
if (upperChoice){
  charset += upperCase
}
if (numericChoice){
  charset += numberCase
}
if (specChoice){
  charset += specialCase
}

for (var i=0; i < charChoice; i++){
  var randomIndex = Math.floor(Math.random() * charset.length);
  var randomChar = charset[randomIndex]
  newChar += randomChar
}
// return generated password

return newChar  
}
// Write password to the #password input
function writePassword(event) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  


  // for (var i = 0; i <= passwordLength; i++) {
  //  var randomText = Math.floor(Math.random() * charset.length);
  //   passwordText += charset.substring(randomText, randomText +1);
  // }
  
  
   passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword) 


