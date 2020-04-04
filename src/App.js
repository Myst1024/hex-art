import React, { useState } from 'react';
import HexPanel from './HexPanel/HexPanel'
import Palette from './Palette/Palette'
import './App.scss';

const App = () => {
  const [currentColor, setCurrentColor] = useState(1);
  const colorTable = ["transparent", "#000000", "#5d5d5d", "#0c24ce", "#ffffff"];
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Wall <span role='img' aria-label="art">🎨</span> Generator
        </p>
      </header>
      <Palette colorTable={colorTable} currentColor={currentColor} setCurrentColor={setCurrentColor}/>
      <HexPanel colorTable={colorTable} currentColor={currentColor}/>
    </div>
  );
}

export default App;
