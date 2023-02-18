import React, { useState} from 'react'

const Form = () => {
    const [firstName, setFirstName ] = useState("");
    const [fNameError, setFNameError] = useState("");
    const [lastName, setLastName ] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState("");
    const [confirmPassword, setConfirmPassword ] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted ] = useState(false);

    const createUser = (e) => {
        e.preventDefault();

        const newUser = { firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted(true);
    

    };
    
    // const formMessage = () =>{
    //     if( hasBeenSubmitted ) {
    //         return "Thank you for submitting the form"
    //     } else {
    //         return "Welcome, please submit the form"
    //     }
    // };  

    

  return (
    <div>
        <div className="container">
            <form onSubmit={ createUser } className="col-6 mx-auto">
                <h2>Please Fill out This Form:</h2>
                
                {/* We can use the method below (ternary operators) instead of creating a different const
                    <h5> {forMessage }</h5>
        
                */}
                {
                    hasBeenSubmitted ?
                    <h5>Thank you for Submitting the form!</h5> :
                    <h5>Welcome, please submit the form.</h5>
                }
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label mt-5">First Name:</label>
                    <input type="text" className="form-control"  value = {firstName} onChange = { (e) => setFirstName(e.target.value)} />
                        {firstName.length <2 && firstName.length > 0 ? (
                            <p>First Name must be at least 2 characters long</p>
                        ) : null }
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input type="text" className="form-control" value = {lastName} onChange = { (e) => setLastName(e.target.value)} />
                        {lastName.length <2 && lastName.length > 0 ? (
                            <p>Last Name must be at least 2 characters long</p>
                        ) : null }
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" name="email" id="" className="form-control" value = {email} onChange = { (e) => setEmail(e.target.value)}/>
                        {email.length < 5 && email.length > 0 ? (
                            <p>Email must be at least 5 characters long</p>
                        ) : null }
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" name="password" id="" className="form-control" value = {password} onChange = { (e) => setPassword(e.target.value)}/>
                        {password.length < 8 && password.length > 0 ? (
                            <p>Password must be at least 8 characters long</p>
                        ) : null }
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                    <input type="password" name="" id="" className="form-control" value = {confirmPassword} onChange = { (e) => setConfirmPassword(e.target.value)}/>
                        { password !== confirmPassword ? 
                            <p>Password does not match</p> : null
                        }
                </div>

                <button type="submit" class="btn btn-dark">Submit</button>
            </form>
            <hr />
            </div>
            <div className='col-4 mx-auto'>
            <h2>Form Information:</h2>
            <table className="table table-striped col-5">
                <tbody >
                <tr>
                    <td>First Name:</td>
                    <td className='mb-3'>{firstName}</td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td>{password}</td>
                </tr>
                <tr>
                    <td>Confirm Password:</td>
                    <td>{confirmPassword}</td>
                </tr>
                </tbody>
            </table>
        </div>       
    </div>
  )
}

export default Form