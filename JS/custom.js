// variable declare;

var fName = document.getElementById('fName');
var fnameErr = document.getElementById('fnameErr');

var lName = document.getElementById('lName');
var lnameErr = document.getElementById('lnameErr');

var email = document.getElementById('email');
var emailErr = document.getElementById('emailErr');

var pass = document.getElementById('pass');
var passErr = document.getElementById('passErr');

var rePass = document.getElementById('rePass');
var rePassErr = document.getElementById('rePassErr');

// submit button err fucus function;
function subm() {
    // first name;
    if(fName.value == ""){
       fName.style.border = "1px dashed red";
       fnameErr.innerHTML = "Please Enter First name?"
       fnameErr.style.display = "block";
       fName.focus();
       return false;
    }
    
    //lName;
    if(lName.value == ""){
       lName.style.border = "1px dashed red";
       lnameErr.innerHTML = "Please Enter Last name?"
       lName.focus();
       return false;
    }
    
    //email;
    if(email.value == ""){
        email.style.border = "1px dashed red";
        emailErr.innerHTML = "Please Enter Your Email";
        email.focus();
        return false;
    }
    //password;
    if(pass.value == ""){
        pass.style.border = "1px dashed red";
        passErr.innerHTML = "Please Enter min 6 digit";
        pass.focus();
        return false;
    }
    //Re-password;
    if(rePass.value == ""){
        rePass.style.border = "1px dashed red";
        rePassErr.innerHTML = "Please Enter Your Password";
        rePass.focus();
        return false;
    }
    if (rePass.value != pass.value){
        pass.style.border = "1px dashed red";
        passErr.innerHTML = "Please and confirm password dinnt match";
        pass.focus();
        return false;
    }
    
}

//err remove function;
function errValid(){
    //first name remove;
    if(fName.value != ""){
        fName.style.border = "1px solid #889495";
        fnameErr.innerHTML = "";
    }
    if(lName.value != ""){
        //last name remove;
        lName.style.border = "1px solid #889495";
        lnameErr.innerHTML = "";
    }
    //email remove;
    if(email.value != ""){
        email.style.border = "1px solid #889495";
        emailErr.innerHTML = "";
    }
    //password remove;
    if(pass.value != ""){
       pass.style.border = "1px solid #889495";
       passErr.innerHTML = "";
    }
     //Re-password remove;
    if(rePass.value != ""){
       rePass.style.border = "1px solid #889495";
       rePassErr.innerHTML = "";
    }
    
}

//err remove function validate;
fName.addEventListener('blur',errValid);
lName.addEventListener('blur',errValid);
email.addEventListener('blur',errValid);
pass.addEventListener('blur',errValid);
rePass.addEventListener('blur',errValid);
