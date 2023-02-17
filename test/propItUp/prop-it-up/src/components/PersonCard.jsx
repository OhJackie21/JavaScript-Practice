import React, { useState } from 'react'



const PersonCard = (props) => {
  const [ age, setAge] = useState(props.age);

  return (
    <div>
    <h1> { props.name } </h1>
    <h3> Age: { age } </h3>
    <h3> Hair Color: { props.hairColor } </h3>
    <p>
      <button onClick={ (event) => setAge(age + 1)}>Birthday Button for {props.name}</button>
    </p>
    <hr />
  </div>
  )
}

export default PersonCard