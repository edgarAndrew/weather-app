import React from 'react'
import IMAGES from '../assets/weather-icons/index.js'

export const Image = (props) => {
    if(props.condition === "cloud_lightning")  
    return (
    <img className='weather-icon' src={IMAGES.cloud_lightning} alt="icon" srcset="" />
  )
  if(props.condition === "clouds")  
    return (
    <img className='weather-icon' src={IMAGES.clouds} alt="icon" srcset="" />
  )
  if(props.condition === "cloudy_day")  
    return (
    <img className='weather-icon' src={IMAGES.cloudy_day} alt="icon" srcset="" />
  )
  if(props.condition === "dust")  
    return (
    <img className='weather-icon' src={IMAGES.dust} alt="icon" srcset="" />
  )
  if(props.condition === "fog")  
    return (
    <img className='weather-icon' src={IMAGES.fog} alt="icon" srcset="" />
  )
  if(props.condition === "haze")  
    return (
    <img className='weather-icon' src={IMAGES.haze} alt="icon" srcset="" />
  )
  if(props.condition === "heavy_rain")  
    return (
    <img className='weather-icon' src={IMAGES.heavy_rain} alt="icon" srcset="" />
  )
  if(props.condition === "light_rain")  
    return (
    <img className='weather-icon' src={IMAGES.light_rain} alt="icon" srcset="" />
  )
  if(props.condition === "rain_cloud")  
    return (
    <img className='weather-icon' src={IMAGES.rain_cloud} alt="icon" srcset="" />
  )
  if(props.condition === "rain")  
    return (
    <img className='weather-icon' src={IMAGES.rain} alt="icon" srcset="" />
  )
  if(props.condition === "sleet")  
    return (
    <img className='weather-icon' src={IMAGES.sleet} alt="icon" srcset="" />
  )
  if(props.condition === "snow")  
    return (
    <img className='weather-icon' src={IMAGES.snow} alt="icon" srcset="" />
  )
  if(props.condition === "storm_rain")  
    return (
    <img className='weather-icon' src={IMAGES.storm_rain} alt="icon" srcset="" />
  )
  if(props.condition === "storm")  
    return (
    <img className='weather-icon' src={IMAGES.storm} alt="icon" srcset="" />
  )
  if(props.condition === "sun")  
    return (
    <img className='weather-icon' src={IMAGES.sun} alt="icon" srcset="" />
  )
  if(props.condition === "tornado")  
    return (
    <img className='weather-icon' src={IMAGES.tornado} alt="icon" srcset="" />
  )
}
