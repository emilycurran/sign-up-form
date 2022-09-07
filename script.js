const firstName = document.getElementById("first-name");
const firstNameError = firstName.nextElementSibling;

const lastName = document.getElementById("last-name");
const lastNameError = lastName.nextElementSibling; 

const email = document.getElementById("email");
const emailError = email.nextElementSibling;

const emailConfirm = document.getElementById("email-confirm");
const emailConfirmError = emailConfirm.nextElementSibling;

const password = document.getElementById("password");
const passwordError = password.nextElementSibling;

const passwordConfirm = document.getElementById("password-confirm");
const passwordConfirmError = passwordConfirm.nextElementSibling;

var inputs = document.getElementsByTagName("input");

for(var i=0; i<inputs.length; i++){
    console.log(inputs[i]);
    inputs[i].setCustomValidity("Please fill out this field."); //intiliasize all elements as invalid

}



password.addEventListener("input", (event) => {
    console.log("yo");
    errorMessage = "";
    isValid = true;

    if(password.value.match(/[A-Z]/) == null){ //check for capital letter
        errorMessage = errorMessage + "Must include a capital letter.  "
        isValid = false;
    }
    if(password.value.match(/\d+/) == null){ //check for number
        errorMessage = errorMessage + "Must include a number.  "
        isValid = false;
    }
    if(password.value.length < 8){
        errorMessage = errorMessage + "Must be at least 8 characters long.  "
        isValid = false;
    }

    passwordError.textContent = errorMessage;

    if(isValid){
        password.setCustomValidity("");
    }else{
        password.setCustomValidity("invalid");
    }

    if(passwordConfirm.value != password.value){
        if(passwordConfirm.value != ""){
            passwordConfirmError.textContent  = "Passwords must match.";
            passwordConfirm.setCustomValidity("Passwords don't match");
        }
    }else{
        passwordConfirmError.textContent  = "";
        passwordConfirm.setCustomValidity("");
    }

});

passwordConfirm.addEventListener("input", (event) => {
    if(passwordConfirm.value != password.value && passwordConfirm.value != ""){
        passwordConfirmError.textContent  = "Passwords must match.";
        passwordConfirm.setCustomValidity("invalid");
    }else{
        passwordConfirmError.textContent  = "";
        passwordConfirm.setCustomValidity("");
    }
});


email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch || email.value == "") {
        emailError.textContent = "Enter a valid email address.";
        email.setCustomValidity("Not a valid email address.");
    } else {
        emailError.textContent = "";
        email.setCustomValidity("");
    }
});

emailConfirm.addEventListener("input", (event) => {
    if(emailConfirm.value != email.value && emailConfirm.value != ""){
        emailConfirmError.textContent  = "Emails must match.";
        emailConfirm.setCustomValidity("Emails don't match.");
    }else{
        emailConfirmError.textContent  = "";
        emailConfirm.setCustomValidity("");
    }
});

firstName.addEventListener("input", (event) => {
    if (firstName.value == "") {
        firstNameError.textContent = "This field is required.";
        firstName.setCustomValidity("invalid");
    } else {
        firstNameError.textContent = "";
        firstName.setCustomValidity("");
    }
});

lastName.addEventListener("input", (event) => {
    if (lastName.value == "") {
        lastNameError.textContent = "This field is required.";
        lastName.setCustomValidity("invalid");
    } else {
        lastNameError.textContent = "";
        lastName.setCustomValidity("");
    }
});