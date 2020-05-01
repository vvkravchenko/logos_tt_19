alert('пароль - ЛОГОС');
let password = prompt('Введіть пароль:');
let i = 4;
while ( password != 'ЛОГОС' && i > 0 ){
    password = prompt (`залишилось ${i} спроби, введіть пароль:`)
    i--;
}
if(password == 'ЛОГОС'){
    alert('Запрошуємо на сайт!');
}else{
    alert('Будь ласка спробуйте пізніше!');
}