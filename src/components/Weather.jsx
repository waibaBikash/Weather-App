import React, { useEffect } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

const Weather = (city) => {

   const search = async() => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      
    }
   }

    useEffect(()=>{
      search("Sydney");
    },[])
  return (
    <div className='weather'>
      <div className="search-bar">
         <input type="text" placeholder='search' />
         <img src={search_icon} alt="" />
      </div>
       <img src={clear_icon} alt=""  className='weather-icon'/>
       <p className='temp'>16°C</p>
       <p className='location'>Sydney</p>
         <div className="weather-data">
            <div className="col">
                <img src={humidity_icon} alt="" />
                <div>
                   <p>91 %</p>
                   <span>Humidity</span>
                </div>
            </div>
            <div className="col">
                <img src={wind_icon} alt="" />
                <div>
                   <p>3.6 km/hr</p>
                   <span>Wind Speed</span>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Weather;