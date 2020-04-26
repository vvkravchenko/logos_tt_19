let name = prompt(`Enter your name`);
if(name == null){
    alert(`Вхід скасований`);
}else if(name === ''){
    alert(`Я вас не знаю`);
}else{
    let password = prompt(`Enter your password`);
    if(password == 'ЛОГОС'){
        alert('Ласкаво просимо!');
    }else if(password== null){
        alert('Вхід скасований');
    }else{
        alert('Пароль не вірний');
    }
}
