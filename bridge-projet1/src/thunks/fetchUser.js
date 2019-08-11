// import { setForks, setPullRequests } from './../actions/actions';

// const fetchUser = (user) => {
//     console.log("here");

//     //make dispatch only return dispatch
//     return function (dispatch) {
//         return fetch(`https://api.github.com/users/${user}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw Error("No user.");
//             }
//             return response.json();
//         })
//         .then(({login: username}) => {
//             return fetch(`https://api.github.com/users/${username}/events`);
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw Error("No events.");
//             }
//             return response.json();
//         })
//         .then(data => {
//             const forked = data.filter(entry => entry.type === "ForkEvent");
//             const pulled = data.filter(entry => entry.type === "PullRequestEvent");

//             const forkData = forked.map(({ payload: {forkee: {full_name, html_url}}, repo: {name} }) => {
//                 return {
//                     forkName: full_name, 
//                     forkUrl: html_url, 
//                     forkedFrom: name
//                 }
//             });

//             const pullData = pulled.map(({ payload: {pull_request: {title, state, html_url}} }) => {
//                 return {
//                     pullName: title,
//                     pullUrl: html_url,
//                     status: state
//                 }
//             });

//             return {
//                 forks: forkData,
//                 pulls: pullData
//             };
//         })
//         .then(({forks, pulls}) => {
//             dispatch(setForks(forks));
//             dispatch(setPullRequests(pulls));

            
//         })
//         .catch(() => {
//             alert("Please enter a valid username.");
//         });
//     };
// }

// export default fetchUser;