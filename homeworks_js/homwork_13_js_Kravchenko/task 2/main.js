let getSel = sel => document.querySelector(sel);

window.addEventListener('keydown', function(e){
    getSel(`#${e.code}`).classList.add('btnDown');
});

window.addEventListener('keyup', function(e){
    getSel(`#${e.code}`).classList.remove('btnDown');
});


