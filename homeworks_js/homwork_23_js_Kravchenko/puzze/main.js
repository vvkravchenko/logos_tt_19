$(function(){
    let img_url = ['img/1.1_cr.png','img/1.2_cr.png','img/1.3_cr.png','img/1.4_cr.png','img/2.1_cr.png','img/2.2_cr.png','img/2.3_cr.png','img/2.4_cr.png','img/3.1_cr.png','img/3.2_cr.png','img/3.3_cr.png','img/3.4_cr.png','img/4.1_cr.png','img/4.2_cr.png','img/4.3_cr.png','img/4.4_cr.png',];

    
    function shuffle(arr){
        let j, temp;
        for(var i = arr.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }

    let img_src = shuffle(img_url);

    
    let src = document.querySelectorAll('.part');
    for(let i = 0; i < src.length; i++){
        src[i].style.backgroundImage = `url(${img_src[i]})`;
    }

    $('.part').draggable({
        snap: true
    });

})