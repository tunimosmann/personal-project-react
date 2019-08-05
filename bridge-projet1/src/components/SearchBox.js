import React, { Component } from "react";
import users from './../testData/users';
import events from './../testData/events';

class SearchBox extends Component {
    // constructor
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            matchedUser: "",
        }
    }

    // functions
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        if(this.state.username.trim() === "") {
            alert("Please enter a valid username.");
            return;
        } 

        // make api call to search fot that user
        const searchUser = users.filter(user => user.login.toLowerCase() === this.state.username.toLowerCase());

        if(searchUser.length <= 0) {
            alert("This user doesn't exists.");
            return;
        } else {
            this.setState({
                matchedUser: searchUser,
            });
        }
    }

    // render
    render() {
        return (
            <div>
            { this.state.matchedUser
                ? (
                // show forks and pulls components
                 <h2>{this.state.matchedUser[0].login}</h2>
                )
                : (
                    <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">GitHub Username</label>
                    <input type="text" id="username" name="username" onChange={this.handleChange}></input>
                    <button>Get User</button>
                </form>
                )
            }
               
            </div>
        )
    }
};

export default SearchBox;