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