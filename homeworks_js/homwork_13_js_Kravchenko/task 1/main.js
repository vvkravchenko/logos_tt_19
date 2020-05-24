let getSel = sel => document.querySelector(sel);
let colors = ['bgcCrimson','bgcDeepPink','bgcOrangeRed','bgcGold','bgcPurple','bgcIndigo','bgcSaddleBrown','bgcSteelBlue','bgcDimGrey'];
let mountain = ['bgiMountain_1','bgiMountain_2','bgiMountain_3','bgiMountain_4','bgiMountain_5','bgiMountain_6','bgiMountain_7','bgiMountain_8','bgiMountain_9'];

// colors
 getSel('.colorButton').addEventListener('click', function(){
     getSel('.mainBox').classList.toggle('visible');
 });
 getSel('.colorButton').addEventListener('click', function(){
    for(let i = 0; i < document.querySelectorAll('.box').length; i++){
        document.querySelectorAll('.box')[i].classList.add(colors[i]);
        document.querySelectorAll('.box')[i].classList.remove(mountain[i]);


        document.querySelectorAll('.box')[i].addEventListener('click', function(){
            document.body.classList.remove(document.body.classList[0]);
            document.body.classList.add(colors[i]);
            });
    }
});
 
// images
 getSel('.imgButton').addEventListener('click', function(){
    getSel('.mainBox').classList.toggle('visible');
});

getSel('.imgButton').addEventListener('click', function(){
    for(let i = 0; i < document.querySelectorAll('.box').length; i++){
        document.querySelectorAll('.box')[i].classList.add(mountain[i]);

        document.querySelectorAll('.box')[i].addEventListener('click', function(){
            document.body.classList.remove(document.body.classList[0]);
            document.body.classList.add(mountain[i]);
            });
    }
});