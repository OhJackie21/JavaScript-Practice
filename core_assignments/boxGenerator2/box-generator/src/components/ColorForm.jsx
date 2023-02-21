import React, { useState }from 'react'


const ColorForm = (props) => {
    const [ colorName, setColorName ] = useState(""); //Creating a useState to keep track of what value input in the input field
    const { colorArray, setColorArray } = props; //creatin a color array using getter and setter
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents browser from refreshing page when form is submitted
        setColorArray( [...colorArray, colorName]); //adding the new value of the color in the array?? not quite sure. 
        setColorName(""); // will clear input values upon submission
    };

    return (
    <div classNameName="container">
        <form className='col-5 mx-auto' onSubmit={handleSubmit}>
            <h1 className='mt-5'>Color Box Generator</h1>

            <div className="input-group mt-5">
                <div className='form-floating'>
                    <input type="text" name="color" className="form-control" placeholder="Type Color Name Here" aria-label="Recipient's username" aria-describedby="button-addon2" 
                onChange={ (e) => setColorName(e.target.value)} value={ colorName }/>
                    <label for="floatingInput">Type Color Name here</label>
                </div>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
            <div>
  
            </div>

        </form>
    </div>
  )
}

export default ColorForm