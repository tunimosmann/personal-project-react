import React from "react";
import { connect } from 'react-redux';
import { inputEntry, setUsername, fetchUser } from './../actions/actions';

const Form = props => {

    // functions
    const handleChange = event => {
        const inputValue = event.target.value;
        props.inputEntry(inputValue);
    }

    const handleSubmit = event => {
        event.preventDefault();

        const entry = props.searchEntry;

        if(entry.trim() === "") {
            alert("Please enter a valid username.");
            return;
        } 

        const user = entry.toLowerCase();

        props.fetchUser(user);
        props.inputEntry("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchEntry">GitHub Username</label>
            <input type="text" id="searchEntry" name="searchEntry" onChange={handleChange}></input>
            <button>Get User</button>
        </form>
    )
}

const mapStateToProps = state => ({
    username: state.searchUser.username,
    searchEntry: state.searchUser.searchEntry
});

const mapDispatchToProps = {
    inputEntry,
    setUsername,
    fetchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);