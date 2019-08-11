import ACTION_TYPES from './actionTypes';

export function inputEntry(payload) {
    return { 
        type: ACTION_TYPES.INPUT_ENTRY,
        payload 
    }
}

export function setUsername(payload) {
    return { 
        type: ACTION_TYPES.SET_USERNAME,
        payload
    }
}

export function setForks(payload) {
    return { 
        type: ACTION_TYPES.SET_FORKS,
        payload
    }
}

export function setPullRequests(payload) {
    return { 
        type: ACTION_TYPES.SET_PULL_REQUESTS,
        payload
    }
}

export function resetUser(payload) {
    return { 
        type: ACTION_TYPES.SET_PULL_REQUESTS,
        payload
    }
}

export function fetchUser(user) {
    

    //make dispatch only return dispatch
    return function (dispatch) {

        console.log("here", user);

        return fetch(`https://api.github.com/users/${user}`)
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

            return {
                forks: forkData,
                pulls: pullData
            };
        })
        .then(({forks, pulls}) => {
            dispatch(setForks(forks));
            dispatch(setPullRequests(pulls));

            
        })
        .catch(() => {
            alert("Please enter a valid username.");
        });
    };
}


// export default actions = {
//     // inputEntry = payload => ({
//     //     type: ACTION_TYPES.INPUT_ENTRY,
//     //     payload
//     // }),
//     // searchUser = payload => ({
//     //     type: ACTION_TYPES.SEARCH_USER,
//     //     payload
//     // }),
//     // setUsername = payload => ({
//     //     type: ACTION_TYPES.SET_USERNAME,
//     //     payload
//     // }),
//     // searchEvents = payload => ({
//     //     type: ACTION_TYPES.SEARCH_EVENTS,
//     //     payload
//     // }),
//     // setForks = payload => ({
//     //     type: ACTION_TYPES.SET_FORKS,
//     //     payload
//     // }),
//     // setPullRequests = payload => ({
//     //     type: ACTION_TYPES.SET_PULL_REQUESTS,
//     //     payload
//     // }),
//     // resetUser = payload => ({
//     //     type: ACTION_TYPES.RESET_USER,
//     //     payload
//     // })
// }