const userResults = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FORKS':
            return { 
                ...state, forks: action.payload
            }
        case 'SET_PULL_REQUESTS': {
            return { 
                ...state, pulls: action.payload
            }
        }
        default:
            return state
    }
}

export default userResults