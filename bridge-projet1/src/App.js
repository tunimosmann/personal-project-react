import React, { Component } from "react";
import './App.css';

// Components
import RecentForks from "./components/RecentForks";
import RecentPulls from "./components/RecentPulls";

// Data for testing
// import users from './testData/users';
// import repos from './testData/repos';
// import events from './testData/events';
// import pulls from './testData/pulls';

class App extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      searchEntry: "",
      username: "",
      userData: [],
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

      const pullData = pulled.map(({ payload: {pull_request: {title, state}} }) => {
        return {
          pullName: title,
          status: state
        }
      });

      // console.log(forkData);
      // console.log(pullData);

      // console.log("forked", forked);
      // console.log("pulled", pulled);
      // this.setState({
      //   forks: forked,
      // });
    })
    .catch(() => {
      alert("User don't exist. Please enter a valid username.");
    });
  }

  // componentDidMount() {
  //   const user = this.state.username;
  //   if(user) {
  //     fetch(`https://api.github.com/users/${user}`)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw Error("No user.");
  //       }
  //       return response.json();
  //     })
  //     .then(({avatar_url, repos_url, events_url}) => {
  //       this.setState({
  //         userInfo: {avatar: avatar_url, repos_url, events_url}
  //       });
  //     })
  //     .catch(() => {
  //       alert("User don't exist. Please enter a valid username.");
  //     });
  //   }

  //   // const userData = this.state.userData;
  //   // if(userData) {
  //   //   fetch(`${this.state.userData.repos_url}`)
  //   //   .then(response => {
  //   //     if (!response.ok) {
  //   //       throw Error("No user repos data.");
  //   //     }
  //   //     return response.json();
  //   //   })
  //   //   .then(data => {
  //   //     console.log(data);
  //   //   })
  //   // }
  // }
  

  // render
  render() {
    return (
      <div>
      { this.state.username
        ? (
          <section>
            <h1>{this.state.username}</h1>
            {/* <RecentForks forks={this.state.forks} />
            <RecentPulls pulls={this.state.pulls} /> */}
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