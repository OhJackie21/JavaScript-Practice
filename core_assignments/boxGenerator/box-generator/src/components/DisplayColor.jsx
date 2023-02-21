import React from 'react'

const DisplayColor = (props) => {
    const { colorArray } = props; //using the getter from the apps.js so we can use to update the submitted value
    
    return (
    <div className='container'>
        {/* the following code  will create the box */}
        { colorArray.map((color, index) => (
            <div key={index} style= {{
                display: "inline-block",
                verticalAlign: "top",
                height: color.lengthSize,
                width: color.widthSize,
                backgroundColor: color.colorName,
                margin: "10px",
                border:"2px black solid",
                boxShadow: "5px 5px 5px grey"
            }}>
            <p style={{
                margin: "auto",
                paddingTop: "35%",
                textTransform: "capitalize",
                wordBreak: "break-all"
            }}>{color.colorName}</p>
            </div>

        ))
        }
    </div>
  )
}

export default DisplayColor