// 1
document.write('<h3>Завдання 1</h3>');
let num = +prompt('Обчислемо факторіал числа:');
let factorial = 1;
if(num == 0){
    factorial = 1;
}else{
    for( let i = 1; i <= num; i++){
        factorial = factorial*i;
    }
}
document.write(`факторіал ${num} = ${factorial}`);

// 2
document.write('<h3>Завдання 2</h3>');
let i = 1000;
while(i <= 9999){
    document.write(`-${i}\t`);
    i = i + 3;
}

// 3
document.write('<h3>Завдання 3</h3>');
let k = 1;
let j = 1;
do{
document.write(`${k} - ${j}<br>`);
k++;
j+=2;
}while (k < 56);

// 4
document.write('<h3>Завдання 4</h3>');
let n = 90
do{
document.write(`${n};\t`);
n-=5;
}while (n > 0);

// 5
document.write('<h3>Завдання 5</h3>');
let x = 1;
let y = 2;
do{
document.write(`${x} - ${y}<br>`);
x++;
y*=2;
}while (x < 21);

// 6
document.write('<h3>Завдання 6</h3>');
let b = 1;
let a = 2;
while (a < 10000){
    document.write(`a${b} - ${a}<br>`);
    b++;
    a = 2*a - 1;
}

// 7
document.write('<h3>Завдання 7</h3>');
let count = 1;
let c = -166;
while (c < 100){
     document.write(`a${count}: ${c}<br>`);
     count++;
     c = 2*c + 200;
}

// 8
document.write('<h3>Завдання 8</h3>');
let numb = +prompt('Введіть число');
let degree = +prompt('Введіть степінь');
let res = 1;

if(degree == 0){
    
}else if (degree < 0){
    degree = -degree;
    for(let i = 1; i <= degree; i++){
        res = res * numb;
    }
    res = 1/res;
    degree = -degree;
}else{
    for(let i = 1; i <= degree; i++){
        res = res * numb;
    }
}
document.write(`${numb} в степені ${degree} = ${res}`);
