import logo from './logo.svg';
import './App.css';
import ColorForm from './components/ColorForm';
import DisplayColor from './components/DisplayColor';
import React, { useState} from 'react';

function App() {
  const [ colorArray, setColorArray ] = useState([]); //holding all colors in the arrays
  return (
    <div className="App">
      <ColorForm colorArray={ colorArray} setColorArray={ setColorArray}/> 
      <br /> <hr />
      <DisplayColor />
    </div>
  );
}

export default App;
