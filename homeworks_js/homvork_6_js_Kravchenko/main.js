    // 1
// let fib = (count) => {
//     switch (count){
//         case 1:
//             console.log("1");
//             break;
//         case 2:
//             console.log("1");
//             console.log("1");
//             break;
//         default:
//             console.log("1");
//             console.log("1");
//                 let first = 1;
//                 let second = 1;
//                 for (let i = 3; i <= count; i++){
//                 let last = first + second;
//                 console.log(last);
//                 first = second;
//                 second = last;
//                 }
//     }
// }
// fib(+prompt('Enter fibonacci number'));

    // 2.1
// let g_prog_loop = function (num, power){
//     let sum = 1;
//     let f = 1;
//     let s;
//     for(let i = 1; i < num; i++){
//         s = f*power;
//         sum = sum + s;
//         f = s;
//         console.log(sum);    
//     }
//     console.log(sum);
// }
// let num = +prompt('enter numer of Geometric progression (LOOP)');
// let power = +prompt('enter power of Geometric progression (LOOP)')
// g_prog_loop(num,power);

    // 2.2
// let g_prog_formula = function (number, power_f){
//     let b1 = 1;
//     let q = power_f;
//     let n = number;
//     let s = b1*(1-q**n)/(1-q);
//     console.log(s);
// }
// let number = +prompt('enter numer of Geometric progression (formula)');
// let power_f = +prompt('enter power of Geometric progression (formula)');
// g_prog_formula(number,power_f);

    // 3
// let range = function (from, to){
//     for(let i = 1; i < to - from; i++){
//         let j = 1;
//         do{
//             j++;
//         }
//         while((from + i) % j !== 0);
//         if((from+i) == j){
//             console.log(from+i);
//         }
//     }
// }
// let from = +prompt("enter from");
// let to = +prompt("enter to");
// range(from,to);
