// 1
let str1 = prompt('enter a string:');
let count = 0;
for(let i = 0; i < str1.length; i++){
    if (str1[i] == ' ') count++;
}
alert(`you clicked spasebar ${count} times`);

// 2
let email = prompt('enter email:');
if(email.indexOf('@') == 0 || email.indexOf('@') == -1 || email.indexOf('@') == email.length-1){
    alert('incorect email');
}
else{
    alert('corect email');
}

// 3
let str3 = prompt("looking for 'html'");
str3 = str3.toLowerCase();
let start = 0;
let index = 0;
while(true){
    let result = str3.indexOf('html', start);
    if(result == -1) break;
    start = result + 1;
    index++;
}
console.log(`'html' entered ${index} times`);

// 4
let str4 = prompt('URL адреса:');
if(str4.indexOf('https://') != -1) console.log(str4.substring(8))
else if (str4.indexOf('http://') != -1) console.log(str4.substring(7))
else console.log("incorrect URL");
