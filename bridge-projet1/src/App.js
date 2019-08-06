import React, { Component } from "react";
import './App.css';

// Components
import RecentForks from "./components/RecentForks";
import RecentPulls from "./components/RecentPulls";

// Data for testing
import users from './testData/users';
import repos from './testData/repos';
// import events from './testData/events';
import pulls from './testData/pulls';

class App extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      matchedUser: "",
      forks: "",
      pulls: "",
    }
  }

  // MAKE FUNCTIONS PURE
  // functions
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    if(this.state.username.trim() === "") {
      alert("Please enter a valid username.");
      return;
    } 

    // make api call to search fot that user, then get the pulls and forks from that user, store in state (store later)

    // find the user
    const searchUser = users.filter(user => user.login.toLowerCase() === this.state.username.toLowerCase());

    if(searchUser.length <= 0) {
      alert("This user doesn't exists.");
      return;
    } else {
      // if there's a user make call to get their forks and pulls (after api is connected)


      // no events of that type on the events file
      // const userForks = events.filter(event => event.type === "ForkEvent");

      // using this for now
      const userForks = repos.filter(repo => repo.fork === true);

      // const userPulls = events.filter(event => event.type === "PullRequestEvent");

      // using this for now 
      const userPulls = pulls;

      const [matchedUser] = searchUser;

      this.setState({
        matchedUser: matchedUser,
        forks: userForks,
        pulls: userPulls
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
            <h1>{this.state.matchedUser.login}</h1>
            <RecentForks forks={this.state.forks} />
            <RecentPulls pulls={this.state.pulls}/>
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