import '../App.css';
import React, { useState } from "react";


const Form = () => {
    const [ category, setCategory ] = useState("");
    const [ id, setId ] = useState("");
 

    const handleSubmit = (e) => {
        e.preventDefault();
      
    };
    

  return (
    <div className='form'>

        <form onSubmit={handleSubmit}>
            <div className="form-floating">
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example"
                onChange={ (e) => setCategory(e.target.value) }>
                    <option value="">Select Here</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label for="floatingSelect">Searching For</label>
            </div>
            <br />
            <div className="form-floating">
                <input type="number" className="form-control" placeholder="Type ID" id="floatingTextarea" 
                onChange={ (e) => setId(e.target.value) }/>
                <label for="floatingTextarea">Type ID #</label>
            </div>
            <br />
            <div>
                <button type="submit" className="btn btn-primary">Search</button>
            </div>
        </form>

    </div>
  )
}

export default Form