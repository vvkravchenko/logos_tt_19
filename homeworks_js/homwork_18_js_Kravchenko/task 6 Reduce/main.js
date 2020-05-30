// Заданий масив з числами. Знайдіть суму перших N елементів до першого нуля. 
// Приклад: [1, 2, 3, 0, 4, 5, 6] - підсумовуємо перші 3 елементи, так як далі стоїть елемент з числом 0.
// Результат вивести в консоль.
    let arr = [1, 2, 5, 0, 4, 5, 6];
    let suma = arr.slice(0, arr.indexOf(0)).reduce((accum, val) => accum + val, 0);
    
    console.log(arr);
    console.log(suma);

// Заданий масив з числами. Дізнайтеся скільки елементів з початку масиву треба скласти, щоб в сумі вийшло більше 10-ти.
// Результат вивести в консоль.
    let arr2 = [1, 2, 3, 0, 4, 5, 6, 8, 15];
    let count = 0;
    let res = arr2.reduce(function(accum, val){
        accum += val;
        if(accum < 11){
            count++;
        } 
        return count;
    },0);
    console.log(`arr2: ${arr2}`);
    console.log(`res: ${res}`);