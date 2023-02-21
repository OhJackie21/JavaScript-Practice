import React from 'react'

const DisplayColor = (props) => {
    const { colorArray } = props; //using the getter from the apps.js so we can use to update the submitted value
    
    return (
    <div className='container'>
        { colorArray.map((color, index) => (
            <div ke={index} style= {{
                display: "inline-block",
                height: "100px",
                width: "100px",
                backgroundColor: color,
                margin: "10px"
            }}>
            {props.color}
            </div>

        ))
        }
    </div>
  )
}

export default DisplayColor