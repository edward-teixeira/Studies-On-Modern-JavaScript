// Init storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();
// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
//weather.changeLocation("new york", us);
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("state").value;
  weather.changeLocation(city, country);
  storage.setLocationData(city, country);
  //Call get weather
  getWeather();
  // close modal
  $("#locModal").modal("hide");
});
function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
