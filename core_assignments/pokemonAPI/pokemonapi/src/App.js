import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  //create an array to hold list of pokemon 
  const [pokemon, setPokemon ] = useState([])
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')    //fetching the Pokemon API site
      .then(response => {
        return response.json()
        //return data information
      })
      .then(response => {
        setPokemon(response.results)
        //store json data into a state
      })
      .catch((err) => {
        console.log(err)
      })

    }, []);
    //empty array is to stop useEffect from running more than once
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
