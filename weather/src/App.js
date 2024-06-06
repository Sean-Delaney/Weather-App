import React, { useEffect } from 'react';
import SearchBar from './SearchBar'
import MainInfo from './MainInfo';
import SubInfo from './SubInfo';

function App() {

  useEffect(()=>{
    document.getElementById('errorholder').setAttribute('style', 'display:none')
  })

  return (
    <div id='container'>
      <div id='errorholder'>
        <p id='errormessage'></p>
      </div>
      <div id='top'>
        <SearchBar />
      </div>
      <div id='middle'>
        <MainInfo />
      </div>
      <div id='bottom'>
        <SubInfo />
      </div>
    </div>
  );
}

export default App;