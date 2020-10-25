const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);
const ui = new UI();


document.addEventListener('DOMContentLoaded', getWeather());

document.querySelector('#w-form').addEventListener('submit', (e) => {
  const city = document.querySelector('#city').value;


  weather.changeLocation(city);
  storage.setLocationData(city);

  getWeather();

  $('#locModal').modal('hide');

  e.preventDefault();
});

function getWeather() {
  weather.getWeather()
    .then(data => {
      console.log(data);
      if(data.success == false){
        ui.showAlert('City not found', 'alert alert-danger', 4000);
      } else{
        ui.paint(data);
      }
    })
    .catch(err => console.log(err));
}
