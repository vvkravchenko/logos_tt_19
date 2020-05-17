document.body.appendChild(document.createElement('ol'));
let tagOl = document.querySelector('ol');
tagOl.style.fontSize = '32px';
tagOl.style.margin = '100px 0 0 200px';

let textLi = ['red','yellow','green','blue','orange','gray'];

for (let i = 0; i < textLi.length; i++){
    let tagLi = document.createElement('li');
    tagLi.innerText = textLi[i];
    tagOl.appendChild(tagLi);
    tagLi.onclick = function(){
        tagLi.style.color = textLi[i];
    }
}