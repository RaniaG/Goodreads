
export const Reducer = (state, action) => {
    // debugger;
    let result;
    debugger;
    switch (action.type) {
        case 'LOGIN':
            result = { ...state, user: action.data };
            break;
        case 'LOGOUT':
            result = { ...state, user: null };
            break;
        default:
            result = state;
    }
    return result;
}