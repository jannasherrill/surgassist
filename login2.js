function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="admin"&& password=="password")
    {
        alert("Login Success");
        return false;

    }
    else
    {
        alert("Login Failed");
    }
}


//   const name = document.getElementById('name')
//   const password = document.getElementById('password')
//   const form = document.getElementById('form')
//   const errorElement = document.getElementById('error')
  
//   form.addEventListener('submit', (e) => {
//     let messages = []
//     if (username.value === '' || username.value == null) {
//       messages.push('Name is required')
//     }
  
//     if (password.value.length <= 6) {
//       messages.push('Password must be longer than 6 characters')
//     }
  
//     if (password.value.length >= 20) {
//       messages.push('Password must be less than 20 characters')
//     }
  
//     if (password.value === 'password') {
//       messages.push('Password cannot be password')
//     }
  
//     if (messages.length > 0) {
//       e.preventDefault()
//       errorElement.innerText = messages.join(', ')
//     }
//   })