/* Date(Y,M-1,D,H,I,S,ms); */
var startDate = new Date(2020, (5 - 1), 24, 0, 0, 0, 0).getTime();
var endDate = new Date(2020, (8 - 1), 4, 0, 0, 0, 0).getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = endDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (distance < 0) {
        clearInterval(x);
        days = hours = minutes = seconds = 0;
    }
    document.getElementById("dTimeDays").innerHTML = ((days <= 9) ? ('0') : ('')) + days;
    document.getElementById("dTimeHours").innerHTML = ((hours <= 9) ? ('0') : ('')) + hours;
    document.getElementById("dTimeMinutes").innerHTML = ((minutes <= 9) ? ('0') : ('')) + minutes;
    document.getElementById("dTimeSeconds").innerHTML = ((seconds <= 9) ? ('0') : ('')) + seconds;
    /* document.querySelector('#loading > span').style.width = (Math.round((now - startDate) / (endDate - startDate) * 10000) / 100) + "%"; */
}, 1000);