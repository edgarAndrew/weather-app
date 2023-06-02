import React from 'react'
import IMAGES from '../assets/weather-icons/index.js'

export const Image = (props) => {
    if(props.condition === "cloud_lightning")  
    return (
    <img className='weather-icon' src={IMAGES.cloud_lightning} alt="icon"  />
  )
  if(props.condition === "clouds")  
    return (
    <img className='weather-icon' src={IMAGES.clouds} alt="icon"  />
  )
  if(props.condition === "cloudy_day")  
    return (
    <img className='weather-icon' src={IMAGES.cloudy_day} alt="icon"  />
  )
  if(props.condition === "dust")  
    return (
    <img className='weather-icon' src={IMAGES.dust} alt="icon"  />
  )
  if(props.condition === "fog")  
    return (
    <img className='weather-icon' src={IMAGES.fog} alt="icon"  />
  )
  if(props.condition === "haze")  
    return (
    <img className='weather-icon' src={IMAGES.haze} alt="icon"  />
  )
  if(props.condition === "heavy_rain")  
    return (
    <img className='weather-icon' src={IMAGES.heavy_rain} alt="icon"  />
  )
  if(props.condition === "light_rain")  
    return (
    <img className='weather-icon' src={IMAGES.light_rain} alt="icon"  />
  )
  if(props.condition === "rain_cloud")  
    return (
    <img className='weather-icon' src={IMAGES.rain_cloud} alt="icon"  />
  )
  if(props.condition === "rain")  
    return (
    <img className='weather-icon' src={IMAGES.rain} alt="icon"  />
  )
  if(props.condition === "sleet")  
    return (
    <img className='weather-icon' src={IMAGES.sleet} alt="icon"  />
  )
  if(props.condition === "snow")  
    return (
    <img className='weather-icon' src={IMAGES.snow} alt="icon"  />
  )
  if(props.condition === "storm_rain")  
    return (
    <img className='weather-icon' src={IMAGES.storm_rain} alt="icon"  />
  )
  if(props.condition === "storm")  
    return (
    <img className='weather-icon' src={IMAGES.storm} alt="icon"  />
  )
  if(props.condition === "sun")  
    return (
    <img className='weather-icon' src={IMAGES.sun} alt="icon"  />
  )
  if(props.condition === "tornado")  
    return (
    <img className='weather-icon' src={IMAGES.tornado} alt="icon"  />
  )
  if(props.condition === "moon")  
    return (
    <img className='weather-icon' src={IMAGES.moon} alt="icon"  />
  )
  if(props.condition === "rain_cloud_night")  
    return (
    <img className='weather-icon' src={IMAGES.rain_cloud_night} alt="icon"  />
  )
}
