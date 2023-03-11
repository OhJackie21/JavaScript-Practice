import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  //create an array to hold list of pokemon 
  const [pokemon, setPokemon] = useState([]) 

  useEffect(() =>{
      //using axios instead of fetch
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807') 
    .then(response => {
      console.log(response.data.results);
      setPokemon(response.data.results);
    })
    .catch((err) => console.log(err));
  }, []);
    //empty array is to make sure that useEffect is being run only once

  return (
    <div className="App">
    POKEMON FETCH
      <ul>
        {
          pokemon.map((pokemonIndx, i) => {
            return(
              <li className='capitalize' key={i}>
                {pokemonIndx.name}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
