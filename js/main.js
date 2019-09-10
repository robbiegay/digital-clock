// || Get Current Time
let hrNum = document.querySelector('.hr');
let minNum = document.querySelector('.min');
let secNum = document.querySelector('.sec');

function currentTime() {
    let date = new Date(); // Creates a new date object
    // Gets hours, min, sec
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // Inserts hours, min, sec into HTML
    if (btn.getAttribute('class') === 'mil') {
        hr = `${hr - 12}`;
        addZero(hr, hrNum);
    } else {
            addZero(hr, hrNum);
    }
    addZero(min, minNum);
    addZero(sec, secNum);
}

// Function to add a zero if the time is a unit < 10
function addZero(timeUnit, timePlace) {
    if (timeUnit < 10) {
        timeUnit = `0${timeUnit}`;
        timePlace.innerHTML = timeUnit;
    } else {
        timePlace.innerHTML = timeUnit;
    }
}

// Updates the clock every 250ms. Figured that this would give relativly 
// good accuracy (1/4th sec) without forcing the browser to refresh 1000x per second
setInterval(currentTime, 250); 





// Change between Military and Civilian Time
let btn = document.querySelector('button');

function clickBtn() {
    let statusBtn = btn.getAttribute('class');
    if (statusBtn === 'civil') {
        btn.setAttribute('class', 'mil');
        btn.innerHTML = 'Military Time';
    } else {
        btn.setAttribute('class', 'civil');
        btn.innerHTML = 'Civilian Time';
    }
}

btn.addEventListener ('click', clickBtn);

// Changing am vs pm
let amOr = document.querySelector('.amOrPm');

function toMil(x, func) {
    if (x) { // should run is x = true, ie if told to change to Mil Time
        if (hr > 12) {
            amOr.innerHTML = 'AM';
            hr = `${hr -12}`;
            func;
        }
    } else {
        func;
    }
}






// Strech: day, month, year button -- 12 and 24hr time button





/*
===========================================
Pseudo Code:
---Display the current time
---Update every second without refreshing the page

create variable: hours, minutes, seconds
use request time to get the time of each variable
have it update continuously (a infinate loop? or a loop that updates every .25 seconds?)
============================================
*/