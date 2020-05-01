// 1
let monght = +prompt('Введіть номер місяця:');
switch(monght){
    case 12:
    case 1:
    case 2:
        alert("зима");
        break;
    case 3:
    case 4:
    case 5:
        alert("весна");
        break;
    case 6:
    case 7:
    case 8:
        alert("літо");
        break;
    case 9:
    case 10: 
    case 11:
        alert("осінь");
        break;
    default:
        alert("такого місяця не існує");
}

// 2
function isPrime (num){
        let n = 1;
        do{
            n++;
        }
        while (num % n !== 0);
        if(num == n){
            alert("number is prime");
        }else{
            alert("number is not prime");
        }
}
isPrime(prompt('enter a number:'));

// 3
function maxParam(a,b){
    let max =0;
    for(let i = 0; i < arguments.length; i++){
        if(max < arguments[i]){
            max = arguments[i];
        }
    }
    return max;
}
console.log(`максимальне число : ${maxParam(105, 64, 86, 35)}`);

