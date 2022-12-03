/* Window alert message when user submit their email to sign up for notifications */
function submissionMessage() {
    let emailValue = document.getElementById("email").value;
    if (emailValue.includes('@') && emailValue.includes('.com')) {
        alert("You've signed up for notifications!");
    }
    else {
        alert("Please enter an email address to sign up");
    }
    document.getElementById("email").value = '';
}

