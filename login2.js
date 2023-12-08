// SHOW PASSWORD
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// HAMBURGER MENU
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

// // LOGIN

// var email = documents.forms['form']['email;'];
// var password = documents.forms['form']['password;'];

// var email_error = document.getElementById('email_error');
// var pass_error = document.getElementById('pass_error');

// email.addEventListener('textInput', email_Verify);
// password.addEventListener('textInput', pass_Verify);

// function validated(){
//   if (email.value.length < 9){
//     email.style.border = "1px solid red";
//     email_error.style.display = "block";
//     email.focus ();
//     return false;
//   }
// }

// if (password.value.length < 9){
//   email.style.border = "1px solid red";
//   email_error.style.display = "block";
//   email.focus ();
//   return false;
// }

// function email_Verify(){
//   if (email.value.length >= 8){
//   email.style.border = "1px solid silver";
//   email_error.style.display = "none";
//   return true;
//   }

// }
// function pass_Verify(){
//   if (email.value.length >= 8){
//   email.style.border = "1px solid silver";
//   email_error.style.display = "none";
//   return true;
//   }

// }