import React from 'react';

// functions
//   handleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value,
//     });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     if(this.state.inputEntry.trim() === "") {
//       alert("Please enter a valid username.");
//       return;
//     } 

//     const user = this.state.inputEntry.toLowerCase();
//     this.fetchUser(user);

//     this.setState({
//       inputEntry: "",
//       username: this.state.inputEntry,
//     }); 
//   }

//   fetchUser = (user) => {
//     fetch(`https://api.github.com/users/${user}`)
//     .then(response => {
//       if (!response.ok) {
//         throw Error("No user.");
//       }
//       return response.json();
//     })
//     .then(({login: username}) => {
//       return fetch(`https://api.github.com/users/${username}/events`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw Error("No events.");
//       }
//       return response.json();
//     })
//     .then(data => {
//       const forked = data.filter(entry => entry.type === "ForkEvent");
//       const pulled = data.filter(entry => entry.type === "PullRequestEvent");

//       const forkData = forked.map(({ payload: {forkee: {full_name, html_url}}, repo: {name} }) => {
//         return {
//           forkName: full_name, 
//           forkUrl: html_url, 
//           forkedFrom: name
//         }
//       });

//       const pullData = pulled.map(({ payload: {pull_request: {title, state, html_url}} }) => {
//         return {
//           pullName: title,
//           pullUrl: html_url,
//           status: state
//         }
//       });

//       this.setState({
//         forks: forkData,
//         pulls: pullData
//       });
//     })
//     .catch(() => {
//       alert("Please enter a valid username.");
//     });
//   }

const Form = (
    {handleSubmit, handleChange}
    ) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchEntry">GitHub Username</label>
            <input type="text" id="searchEntry" name="searchEntry" onChange={handleChange}></input>
            <button>Get User</button>
        </form>
    )
}


export default Form;

