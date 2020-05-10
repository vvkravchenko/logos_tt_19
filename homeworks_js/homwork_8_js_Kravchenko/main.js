// 1
function getDigits(number){
    let floor = Math.floor(number);
    return number - floor;
}
console.log(getDigits(1.25)); // повертає 0,25
console.log(getDigits(7.313)); // повертає 0,3129999 - чому?
console.log(getDigits(100.3));

// 2
function getArea(number){
    return `площа дорівнює ${number*2*Math.PI} квадратних одиниць`;
}
let number;
do{
    number = prompt("введіть радіус");
    if(number == null) alert('Будь ласка, введіть радіус!');
    else if (isNaN(number)) alert('Повинно бути числове значення.');
    else alert(getArea(number));
}
while (isNaN(number) || number == null);

// 3
function getSqrt(num){
    return `корінь квадратний з  ${num} дорівнює ${Math.sqrt(num)} `;
}
let num;
do{
    num = prompt("введіть число");
    if(num == null) alert('Будь ласка, введіть число!');
    else if (isNaN(num)) alert('Повинно бути числове значення.');
    else if (num < 0) alert('Введіть додатнє число.');
    else alert(getSqrt(num));
}
while (isNaN(num) || num == null || num < 0);

   