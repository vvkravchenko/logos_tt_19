document.body.appendChild(document.createElement('div'));
let box = document.querySelector('div');
box.style.width = '200px';
box.style.height = '200px';
box.style.margin ='50px auto';
box.style.border = '4px solid yellow';
box.style.backgroundColor = 'purple';
box.style.textAlign = 'center';

let textDefoult = 'У мене є секрет!'
let textOnMouse = 'Хочеш знати який?'
let textOnMouseDown = 'А я тобі не скажу!'

box.innerText = textDefoult;

box.onmouseover = function(){
    box.innerText = textOnMouse;
    box.style.backgroundColor = 'yellow';
    box.style.borderColor = 'green';
}
box.onmouseout = function(){
    box.innerText = textDefoult;
    box.style.backgroundColor = 'purple';
    box.style.borderColor = 'yellow';
}
box.onmousedown = function(){
    box.innerText = textOnMouseDown;
    box.style.backgroundColor = 'black';
    box.style.borderColor = 'yellow';
    box.style.color = 'white'
}
box.onmouseup = function(){
    box.innerText = textOnMouse;
    box.style.backgroundColor = 'yellow';
    box.style.borderColor = 'green';
    box.style.color = '';
}