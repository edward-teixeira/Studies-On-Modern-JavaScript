console.log('Client side javascript file is loaded!');
const weatherForm = document.querySelector('form');
const locationView = document.querySelector('#location');
const weatherForecast = document.querySelector('#forecast');
/* fetch('http://localhost:3000/weather?address=shas88a7s8as')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err)) */;
function fetchLocation(param) {
  const location = param;
  fetch(`/weather?address=${location}`)
    .then(response => response.json())
    .then(data => {
      if (data.error) console.log(data.error)
      else {
        locationView.textContent = data.location;
        weatherForecast.textContent = data.forecast;
      }
    });
}

weatherForm.addEventListener('submit', function (e) {
  const input = document.querySelector('input');
  fetchLocation(input.value);
  e.preventDefault();
});
