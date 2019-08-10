import React from 'react';

const Form = ({handleSubmit, handleChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchEntry">GitHub Username</label>
            <input type="text" id="searchEntry" name="searchEntry" onChange={handleChange}></input>
            <button>Get User</button>
        </form>
    )
}


export default Form;

