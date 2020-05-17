let smth = document.createElement('div');
document.body.appendChild(smth);

smth.style.width = '100px';
smth.style.height = '100px';
smth.style.border = '1px solid black';
smth.style.margin = '10px auto';
smth.style.backgroundColor = 'purple';

let box = document.querySelector('div');
let colors = ['red', 'yellow', 'green'];
let i = 0;
box.onmouseover = function(){
        box.style.backgroundColor = colors[i];
        i++;
        if(i >= 3) i = 0;
}
box.onmouseleave = function(){
    box.style.backgroundColor = 'purple';
}