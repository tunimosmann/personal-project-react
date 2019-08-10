import ACTION_TYPES from './actionTypes';

export default actions = {
    inputEntry = payload => ({
        type: ACTION_TYPES.INPUT_ENTRY,
        payload
    }),
    // searchUser = payload => ({
    //     type: ACTION_TYPES.SEARCH_USER,
    //     payload
    // }),
    setUsername = payload => ({
        type: ACTION_TYPES.SET_USERNAME,
        payload
    }),
    // searchEvents = payload => ({
    //     type: ACTION_TYPES.SEARCH_EVENTS,
    //     payload
    // }),
    setForks = payload => ({
        type: ACTION_TYPES.SET_FORKS,
        payload
    }),
    setPullRequests = payload => ({
        type: ACTION_TYPES.SET_PULL_REQUESTS,
        payload
    }),
    resetUser = payload => ({
        type: ACTION_TYPES.RESET_USER,
        payload
    })
}