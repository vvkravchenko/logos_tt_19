// Заданий масив з числами. Залиште в ньому тільки позитивні числа. Потім вийміть квадратний корінь і цих чисел. 
// Результат вивести в консоль.
    let arr = [1, -2, 3, 0, 4, -5, 6, -11];
    let positive = arr.filter(val => val > 0);
    let sqrt = positive.map(val => Math.sqrt(val));

    console.log(arr);
    console.log(positive);
    console.log(sqrt);

