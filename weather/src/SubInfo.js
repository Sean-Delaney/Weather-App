import React from 'react'

const SubInfo = () => {
  return (
    <div id='subinfocontainer'>

      <div id='country'>
        <p>Country</p>
        <p id='countryData'></p>
      </div>

      <div id='humidity'>
        <p>Humidity</p>
        <p id='humidityData'></p>
      </div>

      <div id='wind'>
        <p>Wind</p>
        <p id='windData'></p>
      </div>

    </div>
  )
}

export default SubInfo