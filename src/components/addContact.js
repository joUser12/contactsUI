import React, { useState } from 'react'

function AddContact(props) {
    // let state = {
    //     name: "",
    //     email: ""
    // }
    // Initialize state
    const [state, setState] = useState({
        name: "",
        email: ""
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    };
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.name === '' && state.email === '') {
            alert("all the fields are mandatory")
            return
        }
        props.addContactHandler(state)
        console.log("Form submitted with data:", state);
        // Add form submission logic here
        setState({
            name: "",
            email: ""
        })
    };
    return (
        <div className='ui main' >
            <h2>Add Contact</h2>
            <form className='ui form' onSubmit={handleSubmit}>
                <div className='field'>
                    <label>Name</label>
                    <input type='text' name="name" value={state.name} onChange={handleInputChange}
                        placeholder='Name' />

                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type='text' name="email" value={state.email} onChange={handleInputChange}
                        placeholder='Email' />

                </div>
                <button className="ui button blue" type="submit">Add</button>

            </form>

        </div >
    )
}

export default AddContact