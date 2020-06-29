//Alapadatok
let weekDegree = [2, 18, -1, 22, 30, 40, -10];
let offers = ["forró csoki",
    "meleg tea",
    "finom süti",
    "fagyi",
    "jéghideg limonádé"];
let intervalDegree = [0, 15, 20, 25, 100];

/* //min, max, avg, mai hőmérséklet, mai ajánlat megjelenítése
setTimeout(function () {
    //window.onload = function () {

    let minDegree = document.querySelector("span#min-degree");
    let minFahrenheit = document.querySelector("span#min-fahrenheit");
    let minCelsiusTemp = minTemp(weekDegree)
    minDegree.innerHTML = minCelsiusTemp;
    minFahrenheit.innerHTML = celsiusToFahrenheit(minCelsiusTemp);

    let maxDegree = document.querySelector("span#max-degree");
    let maxFahrenheit = document.querySelector("span#max-fahrenheit");
    let maxCelsiusTemp = maxTemp(weekDegree)
    maxDegree.innerHTML = maxCelsiusTemp;
    maxFahrenheit.innerHTML = celsiusToFahrenheit(maxCelsiusTemp);

    let avgDegree = document.querySelector("span#avg-degree");
    let avgFahrenheit = document.querySelector("span#avg-fahrenheit");
    let avgCelsiusTemp = avgTemp(weekDegree)
    avgDegree.innerHTML = avgCelsiusTemp;
    avgFahrenheit.innerHTML = celsiusToFahrenheit(avgCelsiusTemp);


    let nap = new Date().getDay(); //number, a mai nap indexe (V-0, H-1, K-2, ...)
    let napIndex = nap - 1;
    let selectedIndexOfWeek = document.getElementById("days-of-week").selectedIndex;
    selectedIndexOfWeek = String(napIndex);
    kiir(napIndex);
    //}
}, 1000); */

//Konverzió Fahrenheitre
function celsiusToFahrenheit(celsiusTemp) {
    return celsiusTemp / 5 * 9 + 32;
}

//Heti minimum-hőmérséklet függvénye
function minTemp(weekDegree) {
    let min = weekDegree.length != 0 ? weekDegree[0] : 0;
    for (let i = 1; i < weekDegree.length; i++) {
        if (weekDegree[i] < min) {
            min = weekDegree[i];
        }
    }
    return min;
}

//Heti maximum-hőmérséklet függvénye
function maxTemp(weekDegree) {
    let max = weekDegree.length != 0 ? weekDegree[0] : 0;
    for (let i = 1; i < weekDegree.length; i++) {
        if (weekDegree[i] > max) {
            max = weekDegree[i];
        }
    }
    return max;
}

//Heti átlaghőmérséklet függvénye
function avgTemp(weekDegree) {
    let avg = 0;
    for (let i = 0; i < weekDegree.length; i++) {
        avg = (avg + weekDegree[i]);
    }
    return weekDegree.length != 0 ? Math.round(avg / weekDegree.length) : 0;
}


/* Select-change-re lefutó függvény
    - kiválasztott nap hőmérséklete
    - fahrenheitben is
    - ahhoz tartozó ajánlat
*/
document.addEventListener("change", function (ev) {
    var elem = ev.target;

    if (elem && elem.id == "days-of-week") {
        let weekSelect = document.getElementById("days-of-week");
        let valueSelectedDay = parseInt(weekSelect.options[weekSelect.selectedIndex].value);

        kiir(valueSelectedDay);
    }

});


function kiir(napIndex) {
    let showDegree = document.querySelector("span#today-degree");
    let showFahrenheit = document.querySelector("span#today-fahrenheit");
    let showOffer = document.querySelector("span#today-offer");

    showDegree.innerHTML = weekDegree[napIndex];
    showFahrenheit.innerHTML = celsiusToFahrenheit(weekDegree[napIndex]);

    for (let i = 0; i < intervalDegree.length; i++) {

        if (weekDegree[napIndex] < intervalDegree[i]) {
            showOffer.innerHTML = offers[i];
            break;
        }
    }

}


