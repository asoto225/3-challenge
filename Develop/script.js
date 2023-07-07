// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(event) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var charset = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789';
  event.preventDefault();


  // for (var i = 0; i <= passwordLength; i++) {
  //  var randomText = Math.floor(Math.random() * charset.length);
  //   passwordText += charset.substring(randomText, randomText +1);
  // }
  
  
  // return passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword(),{

  })


