class UI {
  constructor(){
    this.location = document.querySelector('#w-location');
    this.desc = document.querySelector('#w-desc');
    this.string = document.querySelector('#w-string');
    this.details = document.querySelector('#w-details');
    this.icon = document.querySelector('#w-icon');
    this.humidity = document.querySelector('#w-humidity');
    this.feelsLike = document.querySelector('#w-feels-like');
    this.precipitation = document.querySelector('#w-precipitation');
  }

  paint(weather){
    this.location.textContent = weather.location.name + ', ' + weather.location.region;
    this.desc.textContent = weather.current.weather_descriptions;
    let fahrenheit = Math.round((weather.current.temperature * (9/5)) + 32);
    this.string.textContent = `${fahrenheit}°F (${weather.current.temperature}°C)`;
    this.icon.setAttribute('src', weather.current.weather_icons);
    this.humidity.textContent = `Humidity: ${weather.current.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike}%`;
    this.precipitation.textContent = `Precipitation: ${weather.current.precip}%`;


  }

  showAlert(message, className, time) {
    this.clearAlert()

    //init alert div
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));

    //insert div at specified area
    const container = document.querySelector('#w-container');
    const heading = document.querySelector('#w-location');

    container.insertBefore(div, heading);


    setTimeout(() => {
      this.clearAlert();
    }, time);
  }

  clearAlert(){
    const alert = document.querySelector('.alert');

    if(alert){
      alert.remove()
    }
  }
}
