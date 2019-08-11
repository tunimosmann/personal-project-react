import React from "react";
import { connect } from 'react-redux';
import { inputEntry, setUsername } from './../actions/actions';

// class Form extends Component {
// //  = (
// //     {handleSubmit, handleChange}
// //     ) => 


// constructor(props) {
//     super(props);
//     this.state = {
//       inputEntry: "",
//       username: "",
//       forks: [],
//       pulls: [],
//     }
//   }

const Form = props => {

    // functions
    const handleChange = event => {
        const inputValue = event.target.value;
        props.inputEntry(inputValue);
    }

    const handleSubmit = event => {
        event.preventDefault();

        const user = props.searchEntry;

        props.setUsername(user);
        props.inputEntry("");

        // console.log(this.props.username);

    // if(this.state.inputEntry.trim() === "") {
    //   alert("Please enter a valid username.");
    //   return;
    // } 

    // const user = this.state.inputEntry.toLowerCase();
    // this.fetchUser(user);

    // this.setState({
    //   inputEntry: "",
    //   username: this.state.inputEntry,
    // }); 
    }

  const fetchUser = (user) => {
    // fetch(`https://api.github.com/users/${user}`)
    // .then(response => {
    //   if (!response.ok) {
    //     throw Error("No user.");
    //   }
    //   return response.json();
    // })
    // .then(({login: username}) => {
    //   return fetch(`https://api.github.com/users/${username}/events`);
    // })
    // .then(response => {
    //   if (!response.ok) {
    //     throw Error("No events.");
    //   }
    //   return response.json();
    // })
    // .then(data => {
    //   const forked = data.filter(entry => entry.type === "ForkEvent");
    //   const pulled = data.filter(entry => entry.type === "PullRequestEvent");

    //   const forkData = forked.map(({ payload: {forkee: {full_name, html_url}}, repo: {name} }) => {
    //     return {
    //       forkName: full_name, 
    //       forkUrl: html_url, 
    //       forkedFrom: name
    //     }
    //   });

    //   const pullData = pulled.map(({ payload: {pull_request: {title, state, html_url}} }) => {
    //     return {
    //       pullName: title,
    //       pullUrl: html_url,
    //       status: state
    //     }
    //   });

    //   this.setState({
    //     forks: forkData,
    //     pulls: pullData
    //   });
    // })
    // .catch(() => {
    //   alert("Please enter a valid username.");
    // });
  }

//   console.log("form props", props);

    // render() {
        // console.log("form props", this.props);
        // console.log(store.getState());
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="searchEntry">GitHub Username</label>
                <input type="text" id="searchEntry" name="searchEntry" onChange={handleChange}></input>
                <button>Get User</button>
            </form>
        )
    // }
}

const mapStateToProps = state => ({
    username: state.searchUser.username,
    searchEntry: state.searchUser.searchEntry
});

const mapDispatchToProps = {
    inputEntry,
    setUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);


// export default Form;

