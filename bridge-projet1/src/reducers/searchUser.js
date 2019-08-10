const searchUser = (state = {}, action) => {
    switch (action.type) {
        case 'INPUT_ENTRY':
            return { 
                ...state, searchEntry: action.payload
            }
        case 'SET_USERNAME': {
            return { 
                ...state, username: action.payload
            }
        }
        default:
            return state
    }
}

export default searchUser;