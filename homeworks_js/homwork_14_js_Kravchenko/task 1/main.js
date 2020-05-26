let form = document.forms['form'];
form.button.addEventListener('click', function(){
    if(form.inputLeft.value != ''){
    form.inputRight.value = form.inputLeft.value;
    form.inputLeft.value = '';
    } 
});

form.inputLast.onblur = function(){
    form.inputLast.placeholder = form.inputLast.value;
    form.inputLast.value = '';    
}