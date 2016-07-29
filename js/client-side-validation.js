debugger;
document.getElementById("fname").addEventListener("blur", validateForm);
document.getElementById("email").addEventListener("blur", validateForm);
document.getElementById("message").addEventListener("blur", validateForm);

function validateForm() {

  console.log("test")
  submit = document.getElementById("submit-btn");

  if (validateName() === true && validateEmail() === true && validateMessage() === true) {
    submit.disabled = false;
    console.log("a")
  }
  else {
    submit.disabled = true;
    console.log("b")
  }
}

function validateName() {
  
  fname = document.getElementById("fname");

  fnameError = document.getElementById("fnameError");

  if (fname.value != "") {
    fnameError.style.display='none';
    return true;
  } 

  else {
    fnameError.style.display='block';
    return false;
  }


}



function validateEmail() {
  
  email = document.getElementById("email");
  emailError = document.getElementById("emailError");

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(email.value)) {
    emailError.style.display='none';
    return true;
  } 

  else {
    emailError.style.display='block';
    return false;
  }


}


function validateMessage() {
  
  message = document.getElementById("message");
  messageError = document.getElementById("messageError");

  if (message.value != "") {
    messageError.style.display='none';
    return true;
  } 

  else {
    messageError.style.display='block';
    return false;
  }


}










