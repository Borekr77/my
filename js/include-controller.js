const callback = () => { };
includeHTML("navbar.html", "navbar-included", callback);

const callback2 = () => {

  //min, max, avg, mai hőmérséklet, mai ajánlat megjelenítése
  let minDegree = document.querySelector("span#min-degree");
  let minFahrenheit = document.querySelector("span#min-fahrenheit");
  let minCelsiusTemp = minTemp(weekDegree);
  minDegree.innerHTML = minCelsiusTemp;
  minFahrenheit.innerHTML = celsiusToFahrenheit(minCelsiusTemp);

  let maxDegree = document.querySelector("span#max-degree");
  let maxFahrenheit = document.querySelector("span#max-fahrenheit");
  let maxCelsiusTemp = maxTemp(weekDegree);
  maxDegree.innerHTML = maxCelsiusTemp;
  maxFahrenheit.innerHTML = celsiusToFahrenheit(maxCelsiusTemp);

  let avgDegree = document.querySelector("span#avg-degree");
  let avgFahrenheit = document.querySelector("span#avg-fahrenheit");
  let avgCelsiusTemp = avgTemp(weekDegree);
  avgDegree.innerHTML = avgCelsiusTemp;
  avgFahrenheit.innerHTML = celsiusToFahrenheit(avgCelsiusTemp);

  let nap = new Date().getDay(); //number, a mai nap indexe (V-0, H-1, K-2, ...)

  let napIndex = (nap + 6) % 7;

  /* 
  let napIndex;
  if (nap != 0) {
    napIndex = nap - 1;
  } else {
    napIndex = 6;
  } */


  document.getElementById("days-of-week").selectedIndex = String(napIndex);
  kiir(napIndex);
};
includeHTML("weather.html", "weather-included", callback2);

const callback3 = () => { };
includeHTML("countdown.html", "countdown-included", callback3);
