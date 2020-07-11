window.onload = function () {
    weatherBalloon(3054643);
}


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

function drawWeather(d) {
    var celsius = Math.round(parseFloat(d.main.temp) - 273.15);
    /*     var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
     */
    let desc = d.weather[0].description;
    document.getElementById('description').innerHTML = desc;
    document.getElementById('temp').innerHTML = `${celsius} &degC`;
    document.getElementById('location').innerHTML = d.name;

    const sunny = "sun";
    const cloudy = "cloud";
    const rainy = "rain";
    const thunder = "thunderstorm";
    const snow = "snow";

    if (desc.includes(sunny)) {
        document.getElementById("weather").style.background = 'linear-gradient(rgba(135, 206, 250, 0.5), rgba(255, 255, 0, 0.5)), url("img/sunny.png")';
    } else if (desc.includes(cloudy)) {
        document.getElementById("weather").style.background = 'linear-gradient(rgba(135, 206, 250, 0.5), rgba(255, 255, 0, 0.5)), url("img/cloudy.png")';
    } else if (desc.includes(rainy)) {
        document.getElementById("weather").style.background = 'linear-gradient(rgba(135, 206, 250, 0.5), rgba(255, 255, 0, 0.5)), url("img/rainy.png")';
    } else if (desc.includes(thunder)) {
        document.getElementById("weather").style.background = 'linear-gradient(rgba(135, 206, 250, 0.5), rgba(255, 255, 0, 0.5)), url("img/thunderstorm.png")';
    } else if (desc.includes(snow)) {
        document.getElementById("weather").style.background = 'linear-gradient(rgba(135, 206, 250, 0.5), rgba(255, 255, 0, 0.5)), url("img/snow.png")';
    } else {
        document.getElementById("weather").style.background = 'linear-gradient(rgba(135, 206, 250, 0.5), rgba(255, 255, 0, 0.5))';
    }
}