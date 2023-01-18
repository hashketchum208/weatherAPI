var inputval = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
// var part = document.querySelector("#Weekly")
var lon = document.querySelector("#lon")
var lat = document.querySelector("#lat")


api = "289c3037142f0afbbaabacdfeb6be362";

// function convertion(val) {
// return (val - 32).toFixed(2);
// }

btn.addEventListener("click", function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/forcast?q=${inputval.value}&units=imperial&appid=${api}`
)

    .then((res) => res.json())

   
    .then((data) => {
      console.log(data);

      var nameval = data["name"];
      var descrip = data["weather"]["0"]["description"];
      var tempature = data["main"]["temp"];
      var wndspd = data["wind"]["speed"];
      // var part = data[""];
      // var lon = data.coord.lon;
      // var lat = data.coord.lat;

      city.innerHTML = `Weather of <span>${nameval}<span>`;
      temp.innerHTML = `Temperature: <span>${tempature} F</span>`;
      description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`;
      
    })

    .catch((err) => alert("Invalid entry. Please list a city"));
});
