/*

Pseudo Code:
---Display the current time
---Update every second without refreshing the page

create variable: hours, minutes, seconds
use request time to get the time of each variable
have it update continuously (a infinate loop? or a loop that updates every .25 seconds?)




function currentTime() {
    let date = "";
    let time = date.getTime();
    document.getElementById('time').innerHTML = time;
}

function currentTime();*/
let hourNum = document.querySelector('.hr');
let minNum = document.querySelector('.min');
let secNum = document.querySelector('.sec');

function currentTime() {
    let date = new Date(); // Creates a new date object
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hourNum.innerHTML = hr;
    minNum.innerHTML = min;
    secNum.innerHTML = sec;
}

for (i = 0; i < 100; i++) {
    setInterval(currentTime(), 1000); 
}
