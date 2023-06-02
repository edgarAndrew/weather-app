
# React Weather App
![screenshot](https://drive.google.com/uc?export=view&id=1XCe85UZMgW4V60Nw6opljCYj3TO4XK8a)

This is a weather web app developed using react 
OpenWeather API is used to get the weather info and Geoapify API is used for address autocomplete

## Getting Started
First you need an API key from OpenWeatherMap and GeoApify, you can get one by creating an account on their website. After you got your API key, create a .env file at root directory of project, copy the line below to the file and replace YOUR_KEY with your respected API Keys.

```
REACT_APP_WEATHER_API_KEY1=(Open weather api key)
REACT_APP_WEATHER_API_KEY2=(Geoapify api key)
```
Finally clone this repository, install dependencies and run the local server
```
git clone https://github.com/{username}/reactweather.git
```
```
cd weather-app
npm install
npm start
```

### Credits
[OpenWeatherMap](https://openweathermap.org/api) (Weather data API)\
[GeoApify](https://www.geoapify.com/address-autocomplete) (Geoapify address autocomplete API)
[Erik Flowers](https://erikflowers.github.io/weather-icons/) (Weather icons API)
