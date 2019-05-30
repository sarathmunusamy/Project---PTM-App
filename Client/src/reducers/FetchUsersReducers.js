const initalState = {
    users: [],
    loading: false
}

function fetchUsersReducers(state = initalState, Action) {
    const user = {
        name: '',
        email: '',
        img: '',
        phone: ''

    }

    switch (Action.type) {
        case 'FETCH_USERS_PENDING':
            return { ...state, loading: true }
            break;
        case 'FETCH_USERS_FULFILLED':
            user.name = Action.payload.data.results[0].name;
            return { ...state, user }
        default:
            return state;
            break;
    }

}

export default fetchUsersReducers;