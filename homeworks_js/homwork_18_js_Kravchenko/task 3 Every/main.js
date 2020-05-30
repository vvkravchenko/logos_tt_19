// Заданий масив об’єктів. Перевірте, чи всі ключі country мають значення 'Ukraine'.
// Результат вивести в консоль.
let arr = [{name: 'Ivan', country: 'Ukraine'},
           {name: 'Petro', country: 'Ukraine'},
           {name: 'Miguel', country: 'Cuba'}];

let res = arr.every(el => el.country == 'Ukraine');
console.log(res);
