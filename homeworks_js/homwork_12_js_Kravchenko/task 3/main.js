let i = 0;
while(i < 3){
    document.body.appendChild(document.createElement('div'));
    i++;
}

document.body.style.display = "flex";
document.body.style.justifyContent = 'space-evenly';
document.body.style.margin = "100px auto";


let box = document.querySelectorAll('div');
for (let i = 0; i < box.length; i++){
    box[i].style.width = '300px';
    box[i].style.height = '300px';
    box[i].style.border = '5px double black';
    box[i].style.backgroundSize = 'cover';

}

for (let i = 0; i < box.length; i++){
    let img;
    box[i].onclick = function(){
        img = prompt('write url image');
        box[i].style.backgroundImage = `url('${img}')`;
        }
}
