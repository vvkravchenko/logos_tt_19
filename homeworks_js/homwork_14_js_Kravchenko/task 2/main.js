getSel = sel => document.querySelector(sel);
let form = document.forms['crt_acc'];

// активація реєстрації при згоді з умовами
form.agree.addEventListener('change', function(){
    if(this.checked) form.button.disabled = false;
    else form.button.disabled = true;
});

// реєстрація
form.button.addEventListener('click', function(){
    getSel('.mainBox').classList.add('hide');
    getSel('.userBox').classList.remove('hide');
    getSel('.flName').innerText = `${form.firstName.value} ${form.secondName.value}`;
    getSel('.email').innerText = form.email.value;
    getSel('.position').innerText = form.position.value;
    if(form.sex.value == 'man') getSel('.photoBox').classList.add('svgBoy');
    else getSel('.photoBox').classList.add('svgGirl');
});

// вихід
getSel('.signOut').addEventListener('click', function(){
    getSel('.photoBox').classList.remove('svgGirl', 'svgBoy');
    getSel('.mainBox').classList.remove('hide');
    getSel('.userBox').classList.add('hide');
})
