import React from 'react'
import {Image} from './Image'
import "./style.css"
import "../assets/icons.css"

export const WeatherCard = (props) => {
    const info = props.info
    return (
        <>
            <div className='cont1'>
                <div style={{display: "flex",justifyContent: "space-between"}}>
                    <h6 className='cur-weather'>Current weather</h6>
                </div>
                <div className='cont2'>
                    <div className='cont3'>
                        <h4 className='weather-location'>{info.name}</h4>
                        <div style={{display:"flex"}}>
                                <div>
                                    <Image condition={info.icon}/>
                                </div>
                                <div className='cur-temp'>
                                    <h6>{info.temp}</h6><i className='wi wi-celsius'></i>
                                </div>
                        </div>
                        <h6 className='weather-condition'>{info.desc}</h6>
                    </div>
                    <div className='cont8'>
                        <p className='feels-like'>
                            Feels like {info.feels_like}<i className='wi wi-celsius'></i>
                        </p>
                        <div style={{display: "flex",marginBottom: "3.3rem",width: "2rem"}}>
                            <div className='cont4'>
                                <div className='cont7'>
                                    <i className='wi wi-direction-up img'></i>
                                </div>
                                {info.max_temp}<i className='wi wi-celsius'></i>
                            </div>
                            <div className='cont4'>
                                <div className='cont7'>
                                    <i className='wi wi-direction-down img'></i>
                                </div>
                                {info.min_temp}<i className='wi wi-celsius'></i>
                            </div>
                        </div>
                        <div className='cont5'>
                            <div className='cont6'>
                                <div className='cont7'>
                                    <i className='wi wi-humidity img'></i>
                                </div>
                                Humidity
                            </div>
                            <span className='values'>{info.humidity}%</span>
                        </div>
                        <div className='cont5'>
                            <div className='cont6'>
                                <div className='cont7'>
                                    <i className='wi wi-strong-wind img'></i>
                                </div>
                                Wind
                            </div>
                            <span className='values'>{info.wind}KPH</span>
                        </div>
                        <div className='cont5'>
                            <div className='cont6'>
                                <div className='cont7'>
                                    <i className='wi wi-barometer img'></i>
                                </div>
                                    Pressure
                            </div>
                            <span className='values'>{info.pressure}hPa</span>
                        </div>
                        <div className='cont5'>
                            <div className='cont6'>
                                <div className='cont7'>
                                    <i className='wi wi-sunset img'></i>
                                </div>
                                Sunset
                            </div>
                            <span className='values'>{info.sunset}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}