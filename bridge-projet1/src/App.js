import React, { Component } from "react";
import './App.css';

// Components
import Form from "./components/Form";
import Results from "./components/Results";

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
    .then(({login: username}) => {
      return fetch(`https://api.github.com/users/${username}/events`);
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
    return (
      <div>
      { this.state.username
        ? 
        <Results 
          username={this.state.username} 
          forks={this.state.forks}
          pulls={this.state.pulls}
        />
        : 
        <Form 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      }  
      </div>
    )
  }
}

// const mapStateToProps = 


export default App;