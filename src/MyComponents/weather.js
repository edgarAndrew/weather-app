import React, { useEffect, useState } from 'react'
import {WeatherCard} from './WeatherCard'
import "./style.css"
import ico1 from '../assets/search.png'

export const Weather = () => {
    
    // Hooks
    const [searchPlace,setSearchPlace] = useState("bangalore");
    const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
    const [locations, setLocations] = useState(null);
    const [info,setInfo] = useState({});

    // Function to make a call to OpenWeather Api
    const getWeatherInfo = async() =>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchPlace}&appid=${process.env.REACT_APP_API_KEY_1}&units=metric`;
            const res = await fetch(url);
            const data = await res.json();
            if(data.cod === 200){
                const id = data.weather[0].id;
                let weather_condition = "";
                if(id>=200 && id<=232){
                    if(id>=210 && id<=211)
                        weather_condition = "storm";
                    else if(id === 212 || id === 221)
                        weather_condition = "cloud_lightning";
                    else
                        weather_condition = "storm_rain";
                }
                else if(id>=300 && id<=321){
                    if(id>=300 && id<=310)
                        weather_condition = "light_rain" ;
                    else
                        weather_condition = "rain" ;
                }
                else if(id>=500 && id<= 531){
                    if(id === 500)
                        if (data.weather[0].icon == '10n')
                            weather_condition = "rain_cloud_night"
                        else
                            weather_condition = "rain_cloud" ;
                    else if (id === 501)
                        weather_condition = "rain" ;
                    else
                        weather_condition = "heavy_rain" ;
                }
                else if(id>=600 && id<=622){
                    if(id>=600 && id<=602)
                    weather_condition = "snow" ;
                    else
                    weather_condition = "sleet" ;
                }
                else if(id>=701 && id<=781){
                    if(id === 721)
                        weather_condition = "haze";
                    else if(id === 781 )
                        weather_condition = "tornado";
                    else if(id === 771)
                        weather_condition = "cloud_lightning";
                    else if(id === 731 || id === 751)
                        weather_condition = "dust";
                    else
                        weather_condition = "fog";
                }
                else if(id === 800)
                    if (data.weather[0].icon == '01n')
                        weather_condition = "moon"
                    else
                        weather_condition = "sun";
                else if(id >= 801 && id<=804){
                    if(id === 801 || id === 802)
                        weather_condition = "cloudy_day";
                    else
                     weather_condition = "clouds";
                    ;
                }
                const obj = {
                    temp : Math.round(data.main.temp),
                    feels_like : Math.round(data.main.feels_like * 10) / 10,
                    max_temp : Math.ceil(data.main.temp_max),
                    min_temp : Math.floor(data.main.temp_min),
                    pressure : data.main.pressure,
                    humidity : data.main.humidity,
                    wind : data.wind.speed,
                    sunset : new Date(data.sys.sunset).toLocaleTimeString("en-US"),
                    country : data.sys.country,
                    desc : data.weather[0].description,
                    name : data.name,
                    icon:weather_condition
                }
                setInfo(obj);
            }
            else{
                setInfo({});
                alert(`${searchPlace} is not a valid place name !!`)
            }
        }
        catch(err){
            console.log(err);
        }
    }
    const getLocations = async(place) =>{
        const res = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${place}&apiKey=${process.env.REACT_APP_API_KEY_2}`)
        const data = await res.json()
        setLocations(data.features)
    }
    useEffect(()=>{ 
        getWeatherInfo();
    },[]);

    useEffect(()=>{
        getLocations(searchPlace)
    },[searchPlace])

    const handleSearchBarFocus = () => {
        setIsSearchBarFocused(true);
        };

    const handleLocationItemClick = (location) => {
        setSearchPlace(location.properties.name ? location.properties.name : location.properties.city)
        setIsSearchBarFocused(false);
        getWeatherInfo()
    };
  
    return (
    <>
        <div className='search'>
            <div>
                <input className='searchBox' type="text" placeholder="Search for location" name="location" id="place" 
                    value={searchPlace} onChange={(e)=> setSearchPlace(e.target.value)} onKeyDown={(e)=>{
                        if(e.key === 'Enter')
                            getWeatherInfo();
                    }}
                    onFocus={handleSearchBarFocus}
                />
                <button className='btn' onClick={getWeatherInfo}>
                    <img src={ico1} className="search-icon" alt="search"/>
                </button>
            </div>
             {isSearchBarFocused && (
                <ul className="location-list">
                    {locations && locations.map((location,index) => (
                        location.properties.name || location.properties.city ?
                            <li key={index} className="location-item" onClick={(event) => handleLocationItemClick(location)}>
                                <div >
                                    {location.properties.name ? location.properties.name : location.properties.city},
                                    {location.properties.state},
                                    {location.properties.country}
                                </div>
                            </li>
                        :null
                        ))
                    }
                </ul>
            )}
        </div>
        <WeatherCard info={info}/>
    </>
  )
}
