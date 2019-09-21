class Weather {
  constructor(city, country) {
    this.apiKey = "b6b51f411ca929af69cc062817d27d50";
    this.city = city;
    this.country = country;
  }

  //fetch weather from API
  async getWeather() {
    const response = await fetch(
      `//api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`
    );
    const responseData = await response;
    return responseData.json();
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
