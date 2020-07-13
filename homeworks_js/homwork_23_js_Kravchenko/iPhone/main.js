$(function(){
    $('.progresBar').slideUp(60000, function(){
        $('h2').text('1');
    }).slideDown(60000, function(){
        $('h2').text('0');
    });
   


})