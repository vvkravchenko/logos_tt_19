let arr = [1, 'string', [3, 4], 5, [6, 7]];
let filterArr = arr.filter(val => Array.isArray(val));

console.log(arr);
console.log(filterArr);
