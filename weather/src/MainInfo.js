import React from 'react'

const MainInfo = (data) => {
  return (
    <div id='maininfocontainer'>

      <div id='temp'>
        <p>Temperature</p>
        <p id='tempData'></p>
      </div>

      <div id='feelslike'>
        <p>Feels like</p>
        <p id='feelslikeData'></p>
      </div>
      
    </div>
  )
}

export default MainInfo