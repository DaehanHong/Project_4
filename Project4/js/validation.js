var form = document.getElementById("form-validation");
var firstName = document.getElementById("fName");
var lastName = document.getElementById("lName");
var age = document.getElementById("age");
var city = document.getElementById("city");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmpassword = document.getElementById("confirmpassword");

firstName.addEventListener('input', () => {
  firstName.setCustomValidity('');
  firstName.checkValidity();
});

firstName.addEventListener('invalid', () => {
  if(firstName.value === '') {
    firstName.setCustomValidity('Please enter your first name!');
  } 
  else {
    firstName.setCustomValidity('You know what? first name can only contain upper and lowercase letters.');
  }
});

lastName.addEventListener('input', () => {
  lastName.setCustomValidity('');
  lastName.checkValidity();
});

lastName.addEventListener('invalid', () => {
  if(lastName.value === '') {
    lastName.setCustomValidity('Please enter your last name!');
  } 
  else {
    lastName.setCustomValidity('You know what? last name can only contain upper and lowercase letters.');
  }
});


age.addEventListener('input', () => {
  age.setCustomValidity('');
  age.checkValidity();
});

age.addEventListener('invalid', () => {
  if(age.value === ''){
    age.setCustomValidity('Please enter your age!');
  }
  else {
    age.setCustomValidity("No way. your age needs to be between 1 and 130");
  }
});


email.addEventListener('input', () => {
  email.setCustomValidity('');
  email.checkValidity();
});

email.addEventListener('invalid', () => {
  if(email.value === ''){
    email.setCustomValidity('Please enter your email!');
  }
  else {
    email.setCustomValidity("haha. don't put tricky email.");
  }
});

