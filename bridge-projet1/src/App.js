import React from "react";
import { connect } from 'react-redux';
import './App.css';

// Components
import ConnectedForm from "./components/Form";
import Results from "./components/Results";

// class App extends Component {
  // constructor
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     inputEntry: "",
  //     username: "",
  //     forks: [],
  //     pulls: [],
  //   }
  // }

  const App = props => {
  // functions
  // handleChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value,
  //   });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();

  //   if(this.state.inputEntry.trim() === "") {
  //     alert("Please enter a valid username.");
  //     return;
  //   } 

  //   const user = this.state.inputEntry.toLowerCase();
  //   this.fetchUser(user);

  //   this.setState({
  //     inputEntry: "",
  //     username: this.state.inputEntry,
  //   }); 
  // }

  // fetchUser = (user) => {
  //   fetch(`https://api.github.com/users/${user}`)
  //   .then(response => {
  //     if (!response.ok) {
  //       throw Error("No user.");
  //     }
  //     return response.json();
  //   })
  //   .then(({login: username}) => {
  //     return fetch(`https://api.github.com/users/${username}/events`);
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw Error("No events.");
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     const forked = data.filter(entry => entry.type === "ForkEvent");
  //     const pulled = data.filter(entry => entry.type === "PullRequestEvent");

  //     const forkData = forked.map(({ payload: {forkee: {full_name, html_url}}, repo: {name} }) => {
  //       return {
  //         forkName: full_name, 
  //         forkUrl: html_url, 
  //         forkedFrom: name
  //       }
  //     });

  //     const pullData = pulled.map(({ payload: {pull_request: {title, state, html_url}} }) => {
  //       return {
  //         pullName: title,
  //         pullUrl: html_url,
  //         status: state
  //       }
  //     });

  //     this.setState({
  //       forks: forkData,
  //       pulls: pullData
  //     });
  //   })
  //   .catch(() => {
  //     alert("Please enter a valid username.");
  //   });
  // }

  console.log("app props", props);

  // render
  // render() {
    return (
      <div>
      { props.username
        ? 
        <Results 
          // username={this.state.username} 
          // forks={this.state.forks}
          // pulls={this.state.pulls}
        />
        : 
        // <Form 
        //   handleSubmit={this.handleSubmit}
        //   handleChange={this.handleChange}
        // /> 
        <ConnectedForm />
      }  
      </div>
    )
  // }
}

const mapStateToProps = state => ({username: state.searchUser.username});

// const mapDispatchToProps = dispatch => ({
//   sendMessage: messaga => {
//   dispatch(sendMessage(message));
//   dispatch(navigateTo({ routeName: 'messagesList' }));
//   },
//  });

export default connect(
  mapStateToProps
  // ,
  // actionCreators
)(App);
// export default App;