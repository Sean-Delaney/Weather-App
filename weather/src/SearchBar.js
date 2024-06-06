import React, {useEffect, useState} from 'react'
import axios from 'axios'

const SearchBar = (e) =>{

  const[location, setLocation] = useState([])
  const[weatherData, setWeatherData] = useState([])

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=ead4cfad72a1b3a6d791e5a22d1fa7d6&units=metric';
  
  const searchLocation = () =>{
      axios.get(url).then((resp)=>{
        document.getElementById('errorholder').setAttribute("style", "display:none")
        document.getElementById('tempData').innerHTML = resp.data.main.temp + '°C'
        document.getElementById('feelslikeData').innerHTML = resp.data.main.feels_like + '°C'
        document.getElementById('countryData').innerHTML = resp.data.sys.country
        document.getElementById('humidityData').innerHTML = resp.data.main.humidity + '%'
        document.getElementById('windData').innerHTML = resp.data.wind.speed + 'KPH'
    }).catch((error) => {
      document.getElementById('errorholder').setAttribute("style", "display:inline")
      document.getElementById('errormessage').innerHTML = "Can't find weather data for " + location
      document.getElementById('tempData').innerHTML = ''
      document.getElementById('feelslikeData').innerHTML = ''
      document.getElementById('countryData').innerHTML = ''
      document.getElementById('humidityData').innerHTML = ''
      document.getElementById('windData').innerHTML = ''
    })
  }

  return(
    <div id='searchholder'>
      <input 
      type='text' 
      id='locationinput' 
      placeholder='Location...'
      value={location}
      onChange={event => setLocation(event.target.value)}/>

      <button id='searchbutton'
      onClick={searchLocation}>Go!</button>
    </div>
  )
}

export default SearchBar