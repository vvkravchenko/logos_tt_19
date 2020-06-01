let getSel = sel => document.querySelector(sel);
let form = document.forms['signUp'];

let regExpName = /^[A-Za-z][a-z]{0,19}$/; 
let regExpMail = /^[\w.-]+@[a-z]+\.[a-z]+$/;
let regExpPhone =/^\+38\(0\d{2}\)\d{3}-\d{2}-\d{2}$/;
let regExpPassword = /^[A-Za-z0-9]{8,15}$/;

form.button.addEventListener('click', function(e){
    let valid_fname = regExpName.test(form.fname.value);
        if(valid_fname) {
            getSel('.valid_fname').classList.remove('invalid');
            getSel('.valid_fname').classList.add('valid');
        }
        else {
            getSel('.valid_fname').classList.remove('valid');
            getSel('.valid_fname').classList.add('invalid');
        }
    let valid_lname = regExpName.test(form.lname.value);
        if(valid_lname) {
            getSel('.valid_lname').classList.remove('invalid');
            getSel('.valid_lname').classList.add('valid');
        }
        else {
            getSel('.valid_lname').classList.remove('valid');
            getSel('.valid_lname').classList.add('invalid');
        }
    let valid_email = regExpMail.test(form.email.value);
        if(valid_email) {
            getSel('.valid_email').classList.remove('invalid');
            getSel('.valid_email').classList.add('valid');
        }
        else {
            getSel('.valid_email').classList.remove('valid');
            getSel('.valid_email').classList.add('invalid');
        }
    let valid_phone = regExpPhone.test(form.phone.value);
        if(valid_phone) {
            getSel('.valid_phone').classList.remove('invalid');
            getSel('.valid_phone').classList.add('valid');
        }
        else {
            getSel('.valid_phone').classList.remove('valid');
            getSel('.valid_phone').classList.add('invalid');
        }  
    let valid_pass = regExpPassword.test(form.password.value);
    if(valid_pass) {
        getSel('.valid_password').classList.remove('invalid');
        getSel('.valid_password').classList.add('valid');
    }
    else {
        getSel('.valid_password').classList.remove('valid');
        getSel('.valid_password').classList.add('invalid');
    }
});