$(function(){

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }

    
    let colors = ['navy','blue','maroon','lime','teal','black','green','olive','yellow','red'];
    let width;
    let heigth;
    let color;
    let top;
    let left;
    let topMax;
    let leftMax;


$('.clickBox').click(function (e) { 
    console.log(e);
    width = randomInteger(100, 300);
    heigth = randomInteger(100, 300);
    color = colors[randomInteger(0, 9)];
    topMax = $(window).height() - heigth;
    leftMax = $(window).width() - width;
    
    top = innerHeight*Math.random();
    if (top > topMax) top = topMax -heigth;
    left = innerWidth*Math.random();
    if (left > leftMax) left = leftMax -width;



    console.log(`width = ${width}`);
    console.log(`heigth = ${heigth}`);
    console.log(`color = ${color}`);
    console.log(`top = ${top}`);
    console.log(`left = ${left}`);
    console.log(`topMax = ${topMax}`);
    console.log(`leftMax = ${leftMax}`);
  

    $('.clickBox').animate({
        width: width + 'px',
        height: heigth + 'px',
        backgroundColor: color,
        top: top,
        left: left,
    }, 1000)
    
});


    
})