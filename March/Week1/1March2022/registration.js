function verifyPassword(form) {
    pass1 = form.pass1.value;
    pass2 = form.pass2.value;
   
    if (pass1 != pass2) {
        alert("\n Password not match: Please try again")
        return false;
    }
    else {
        alert("Registration Successfull")
        return true;
    }
}