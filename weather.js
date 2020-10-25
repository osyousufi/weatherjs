class Weather {
  constructor(city) {
    this.apiKey = 'f11ed592ba9a38255dbfe4db77af8a0e';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`);

    const resData = await response.json();

    return resData;
  }

  changeLocation(city) {
    this.city = city;
  }
}
