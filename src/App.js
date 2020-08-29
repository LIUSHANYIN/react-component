import React, { useState } from 'react';
import './App.css';
import Carousel from './Component/Carousel/index';
import Popup from './Component/Popup/index';
function App() {
  const [isPopup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup(true);
  };
  const handlePopupClose = () => {
    setPopup(false);
  };
  return (
    <div className='App'>
      <div>
        <h2>This is Carousel</h2>

        <Carousel />
      </div>
      <div>
        <h2>This is Popup</h2>
        <button onClick={handlePopup}>Click</button>
        {isPopup && <Popup handlePopupClose={handlePopupClose} />}{' '}
      </div>
    </div>
  );
}

export default App;
