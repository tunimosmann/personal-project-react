import React, { Component } from "react";
import './App.css';

// Components
import RecentForks from "./components/RecentForks";
import RecentPulls from "./components/RecentPulls";

class App extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      searchEntry: "",
      username: "",
      forks: [],
      pulls: [],
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

    if(this.state.searchEntry.trim() === "") {
      alert("Please enter a valid username.");
      return;
    } 

    const user = this.state.searchEntry.toLowerCase();
    this.fetchUser(user);

    this.setState({
      searchEntry: "",
      username: this.state.searchEntry,
    }); 
  }

  fetchUser = (user) => {
    fetch(`https://api.github.com/users/${user}`)
    .then(response => {
      if (!response.ok) {
        throw Error("No user.");
      }
      return response.json();
    })
    .then(({login}) => {
      return fetch(`https://api.github.com/users/${login}/events`);
    })
    .then(response => {
      if (!response.ok) {
        throw Error("No events.");
      }
      return response.json();
    })
    .then(data => {
      const forked = data.filter(entry => entry.type === "ForkEvent");
      const pulled = data.filter(entry => entry.type === "PullRequestEvent");

      const forkData = forked.map(({ payload: {forkee: {full_name, html_url}}, repo: {name} }) => {
        return {
          forkName: full_name, 
          forkUrl: html_url, 
          forkedFrom: name
        }
      });

      const pullData = pulled.map(({ payload: {pull_request: {title, state, html_url}} }) => {
        return {
          pullName: title,
          pullUrl: html_url,
          status: state
        }
      });

      this.setState({
        forks: forkData,
        pulls: pullData
      });
    })
    .catch(() => {
      alert("Please enter a valid username.");
    });
  }

  // render
  render() {

    // console.log(this.state.forks);

    return (
      <div>
      { this.state.username
        ? (
          <section>
            <h1>{this.state.username}</h1>
            { this.state.forks.length > 0 ? <RecentForks forks={this.state.forks} /> : <p>No recent Forks.</p> }
            { this.state.pulls.length > 0 ? <RecentPulls pulls={this.state.pulls} /> : <p>No recent Pull Requests.</p> }
          </section> 
        )
        : (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="searchEntry">GitHub Username</label>
            <input type="text" id="searchEntry" name="searchEntry" onChange={this.handleChange}></input>
            <button>Get User</button>
          </form>
        )
      }  
      </div>
    )
  }
}

export default App;