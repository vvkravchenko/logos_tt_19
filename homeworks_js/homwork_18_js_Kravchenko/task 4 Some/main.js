// Заданий масив об’єктів. Перевірте, чи всі хоч один ключ country має значення 'Cuba'.
// Результат вивести в консоль.
let arr = [{name: 'Ivan', country: 'Ukraine'},
           {name: 'Petro', country: 'Ukraine'},
           {name: 'Miguel', country: 'Cuba'}];

let res = arr.some(el => el.country == 'Cuba');
console.log(res);
