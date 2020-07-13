$(function(){

       function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }

    let colors = ['navy','blue','maroon','lime','teal','black','green','olive','yellow','red'];
    let width = randomInteger(50, 200);
    let height = width;
    let indexColor = randomInteger(0, 9);
    let indexBdColor = randomInteger(0, 9);
    let topMax = $(window).height() - height;
    let leftMax = $(window).width() - width;
    let top = innerHeight*Math.random();
        if (top > topMax) top = topMax -height;
    let left = innerWidth*Math.random();
        if (left > leftMax) left = leftMax -width;

    $('.clickBox').animate({
        width: width,
        height: height,
        backgroundColor: colors[indexColor],
        borderColor: colors[indexBdColor],
        top: top,
        left: left
    }, 1000)

    function myInterval(){

        $('.clickBox').animate({
            backgroundColor: colors[randomInteger(0, 9)],
            borderColor: colors[randomInteger(0, 9)],
            top: randomInteger(0, topMax-height),
            left:randomInteger(0, leftMax- width), 
        })
    }
    
    let interval = setInterval(myInterval,1000);
    
    
    $('.clickBox').click(function () { 
        clearInterval(interval);
    });
    
})