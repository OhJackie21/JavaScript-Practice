import React, { useState }from 'react';


const ColorForm = (props) => {
    const [ colorName, setColorName ] = useState(""); //Creating a useState to keep track of what value input in the input field for both color and size
    const [ lengthSize, setLengthSize ] = useState(100);
    const [ widthSize, setWidthSize] = useState(100);
    const [hasBeenSubmitted, setHasBennSubmitted] = useState(false)
    const { colorArray, setColorArray } = props; //creatin a color array using getter and setter
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents browser from refreshing page when form is submitted
        setColorArray( [...colorArray, 
            {
                colorName: colorName,
                lengthSize: lengthSize + "px",
                widthSize: widthSize + "px"
            }
            ]); //adding the new value of the color in the array?? not quite sure. 
        setColorName(""); // will clear input values upon submission
        setLengthSize(100); //automatically uses this 100 when value is not given
        setWidthSize(100);
        setHasBennSubmitted(true);
    };

    return (
    <div classNameName="container">
        <form className='col-5 mx-auto' onSubmit={handleSubmit}>
            <h1 className='mt-5' style={{
                color: "white",
                textShadow: "-4px 4px #ef3550, -8px 8px #f48fb1, -12px 12px #7e57c2, -16px 16px #2196f3, -20px 20px #26c6da, -24px 24px #43a047, -28px 28px #eeff41, -32px 32px #f9a825, -36px 36px #ff5722",
                fontFamily: "'Monofett', cursive",
                fontSize: "50px",
                letterSpacing: "1rem"
            }}>Color Box Generator</h1>

            <div className="input-group mt-5">
                <div className='form-floating'>
                    <input type="number" name="lengthSize"className="form-control" onChange={ (e) => setLengthSize(e.target.value)} value={lengthSize}/>
                        <label for="floatingInput">Length in Pixels</label>
                </div>
                <div className='form-floating'>
                    <input type="number" name="widthSize" className="form-control" onChange={ (e) => setWidthSize(e.target.value)} value={widthSize}/>
                        <label for="floatingInput">Width in Pixels</label>
                </div>
            </div>
            <div className="input-group">
                <div className='form-floating'>
                    <input type="text" name="colorName" className="form-control" 
                onChange={ (e) => setColorName(e.target.value)} value={ colorName }/>
                    <label for="floatingInput">Type Color Name here</label>
                </div>
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2">SUBMIT</button>
            </div>
            <div>
                { colorName.length < 2 && colorName.length > 0 ? (
                <p className='text-danger'>Color must be at least 2 characters long</p>
            ): null}
            </div>

        </form>
    </div>
  )
}

export default ColorForm