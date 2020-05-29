getSel = sel => document.querySelector(sel);
let form = document.forms['stopwatchNav'];
let curDateObj = new Date();

// поточна дата
let curDay = curDateObj.getDate();
let curMonth = curDateObj.getMonth()+1;
let curYear = curDateObj.getFullYear();
if(curDay < 10) curDay = '0'+curDay;
if(curMonth < 10) curMonth = '0'+curMonth;
let currentDate = `${curDay}.${curMonth}.${curYear}`;
getSel('.date').innerText = currentDate;

// поточний час
function currentTime(){
    let t = new Date();
    let hour = t.getHours();
    let minutes = t.getMinutes();
    let seconds = t.getSeconds();
    if(hour < 10) hour = '0' + hour;
    if(minutes < 10) minutes = '0' + minutes;
    if(seconds < 10) seconds = '0' + seconds;
    let curTime = `${hour}:${minutes}:${seconds}`;
    document.querySelector('.time').innerText = curTime;
}
setInterval(currentTime,1000);

// секундомір START
window.onload = () => document.querySelectorAll('span')[1].innerText = `00:00:00:000`;
    let stopwatch;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let milisec = 0;
    let stopwatchInterval;

form.start.addEventListener('click', function(){
    stopwatchInterval = setInterval(function(){
        seconds++;
        // milisec++;
        // if(milisec == 1000){
        //     seconds++;
        //     milisec = 0;
        // }
        if(seconds == 60){
            minutes++;
            seconds = 0;
        }
        if(minutes == 60){
            hours++;
            minutes = 0;
        }
        if(hours == 24) hours = 0;
            let h = hours;
            let m = minutes;
            let s = seconds;
            let ms = milisec;
            if(h < 10) h = '0' + h;
            if(m < 10) m = '0' + m;
            if(s < 10) s = '0' + s;
            if(ms < 10) ms = '00'+ ms;
            if(ms < 100) ms = '0'+ ms;

            stopwatch = `${h}:${m}:${s}:${ms}`;
            document.querySelectorAll('span')[1].innerText = stopwatch;
    },1000);
    form.start.disabled = true;
});

// секундомір STOP
form.stop.addEventListener('click', function(){
    clearInterval(stopwatchInterval);
    form.start.disabled = false;
});

// секундомір LOOP 
form.loop.addEventListener('click', function(){
    let countLi = document.querySelectorAll('li');
    if(countLi.length > 3){
        for(let i = 0; i < countLi.length; i++){
            getSel('ul').removeChild(document.querySelector('li'));         
        }
    } 
   let li = document.createElement('li');
   li.innerText = stopwatch;
   getSel('ul').appendChild(li);
});

// секундомір RESET
form.reset.addEventListener('click', function(){
    hours = 0;
    minutes = 0;
    seconds = 0;
    milisec = 0;

    document.querySelectorAll('span')[1].innerText = `00:00:00:000`;
    
    let countLi = document.querySelectorAll('li');
        if(countLi.length > 0){
            for(let i = 0; i < countLi.length; i++){
            getSel('ul').removeChild(document.querySelector('li'));         
        }
    }
   
    clearInterval(stopwatchInterval);

    form.start.disabled = false;
});

// таймер
//встановлюємо таймер
let target = 25;
let target_print = 25;
getSel('.timerSet').innerText = target_print;
document.forms['timerSet'].plus.addEventListener('click', function(){
    target++;
    target_print = target;
    if(target_print < 10) target_print = `0${target_print}`;
    getSel('.timerSet').innerText = target_print;
    readoutMin = target;
});
document.forms['timerSet'].minus.addEventListener('click', function(){
   if(target == 0) target = 0;
   else target--;
    target_print = target;
    if(target_print < 10) target_print = `0${target_print}`;
    getSel('.timerSet').innerText = target_print;
    readoutMin = target;
});

// таймер START
let rdt_print = `00:00`;
getSel('.readout').innerText = rdt_print;

let timerInterval;
let readoutSec = 0;
let readoutMin = target;

document.forms['readoutNav'].start.addEventListener("click", function(e){
    timerInterval = setInterval(function(){
        
        if(readoutSec == 0){
            readoutSec = 60;
            readoutSec--;
            readoutMin--;
        } 
        
        let rdtMin_print = readoutMin;
        let rdtSec_print = readoutSec;
        
        if(rdtMin_print < 10) rdtMin_print = `0${rdtMin_print}`;
        if(rdtSec_print < 10) rdtSec_print = `0${rdtSec_print}`;
        let rdt_print = `${rdtMin_print}:${rdtSec_print}`;
        getSel('.readout').innerText = rdt_print;
        
        readoutSec--;

        if(readoutMin == 0 & readoutSec == 0){
            clearInterval(timerInterval);
            getSel('.readout').innerText = '00:00';
         }
    
    },1000);

    document.forms['readoutNav'].start.disabled = true;
});
// таймер STOP
document.forms['readoutNav'].stop.addEventListener("click", function(e){
    clearInterval(timerInterval);
    document.forms['readoutNav'].start.disabled = false;
});
// таймер RESET
document.forms['readoutNav'].reset.addEventListener("click", function(e){
    clearInterval(timerInterval);
    readoutSec = 0;
    readoutMin = target;
    getSel('.readout').innerText = '00:00';
    document.forms['readoutNav'].start.disabled = false;
});


