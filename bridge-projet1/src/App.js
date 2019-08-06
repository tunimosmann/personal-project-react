import React, { Component } from "react";
import './App.css';

// Components
import RecentForks from "./components/RecentForks";
import RecentPulls from "./components/RecentPulls";

// Data for testing
import users from './testData/users';
import repos from './testData/repos';
import events from './testData/events';
import pulls from './testData/pulls';

class App extends Component {
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
      [event.target.id]: event.target.value,
    });
  }

  // MAKE FUNCTIONS PURE
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
          <section>
            <RecentForks />
            <RecentPulls />
          </section> 
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
}

export default App;