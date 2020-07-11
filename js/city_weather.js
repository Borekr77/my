function weatherBalloon(cityID) {
    var key = 'f9ee704710d9f7a27f8916d0cfdcafe2';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            drawWeather(data);
        })
        .catch(function () {
            // catch any errors
        });
}


window.onload = function () {
    weatherBalloon(3054643);
}


function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    /*     var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
     */
    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = celcius;
    document.getElementById('location').innerHTML = d.name;



    if (d.weather[0].description == 'few clouds') {
        document.getElementById("weather").style.background = 'linear-gradient(rgba(135, 206, 250, 0.5), rgba(255, 255, 0, 0.5)), url("img/cloudy.png")';
    } else {
        document.getElementById("weather").style.background = 'linear-gradient(rgba(135, 206, 250, 0.5), rgba(255, 255, 0, 0.5)), url("img/sunny.png")';
    }
}