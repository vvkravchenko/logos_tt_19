alert('Встановлюємо стиль сторінки');
let bgc = prompt('визначте фон для сторінки','RosyBrown');
let fontStyle = prompt('визначте тип шpифта на сторінці','italic');
let h1TextAlign = prompt('визначте вирівнювання для заголовка h1', 'center');
let abgc = prompt('визначте фон для параграфа зі зсилками', 'Aquamarine');
let pTextcolor = prompt('визначте колір тексту у параграфі зі зсилками і для самих зсилок', 'DarkSlateGrey');
let divTextColor = prompt('визначте колір тексту у елементі div', 'SaddleBrown');
let divTextSize = prompt('визначте розмір тексту у елементі div', '18');
let divTextWeigth = prompt('визначте товщину тексту у елементі div', '600');
let liType = prompt('визначте тип маркера для маркованого списку на сторінці', 'square');

let sites = ['medium.com', 'github.com', 'caniuse.com'];
for (let i = 0; i < 3; i++){
    sites[i] = prompt(`введіть адресу улюбленого сайту ${i+1}`, `${sites[i]}`);
}


document.body.style.backgroundColor = bgc;
document.body.style.fontStyle = fontStyle;
document.querySelector('h1').style.textAlign = h1TextAlign;
document.querySelector('p').style.backgroundColor = abgc;
document.querySelector('p').style.color = pTextcolor;

for(let i = 0; i < document.getElementsByTagName('a').length; i++){
    document.getElementsByTagName('a')[i].style.color = pTextcolor;
}

let divStyle = document.querySelector('div').style;
divStyle.color = divTextColor;
divStyle.fontSize = divTextSize;
divStyle.fontWeight = divTextWeigth;

for(let i = 0; i < document.querySelectorAll('li').length; i++){
    document.querySelectorAll('li')[i].type = liType;
}

let link = document.querySelectorAll('a');
for(let i = 0; i < link.length; i++){
    link[i].innerText = sites[i];
    link[i].target = '_blank';
}