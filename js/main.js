// || Get Current Time
let hrNum = document.querySelector('.hr');
let minNum = document.querySelector('.min');
let secNum = document.querySelector('.sec');

function currentTime() {
    let date = new Date(); // Creates a new date object
    // Gets hours, min, sec
    let hr = date.getHours(); // Comment this out and set a number (0-23) to test if various am/pm times work
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // Inserts hours, min, sec into HTML
    if (btn.getAttribute('class') === 'mil') { // If civilian time toggeled, runs the following to convert to civilian time
        if (hr === 0) {
            amPmView.innerHTML = 'MIDNIGHT'; // If hr = 0, MIDNIGHT
        } else if (hr > 0 && hr < 12) {
            amPmView.innerHTML = 'AM'; // If hr between 0 and 12 = AM
        } else if (hr === 12) {
            amPmView.innerHTML = 'NOON'; // If hr = 12, NOON
        } else {
            amPmView.innerHTML = 'PM'; // If hr > 12 = PM, then subtracts 12 from hr
            hr = `${hr - 12}`;
        }
        addZero(hr, hrNum);
    } else {
            addZero(hr, hrNum);
    }
    addZero(min, minNum);
    addZero(sec, secNum);
}

// || Function to add a zero if the time is a unit < 10
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



// || Change between Military and Civilian Time
let btn = document.querySelector('button');
let amPmView = document.querySelector('.amPm');

function clickBtn() {
    let statusBtn = btn.getAttribute('class');
    if (statusBtn === 'civil') { // Changes to civilian time
        btn.setAttribute('class', 'mil');
        btn.innerHTML = 'Military Time';
        amPmView.setAttribute('style', 'visibility: visible;');
    } else { // Changes to military time
        btn.setAttribute('class', 'civil');
        btn.innerHTML = 'Civilian Time';
        amPmView.setAttribute('style', 'visibility: hidden;');
    }
}

btn.addEventListener ('click', clickBtn);



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