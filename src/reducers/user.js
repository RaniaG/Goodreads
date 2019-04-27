const { getUserInfo } = require('../API');

export const Reducer = (state, action) => {
    // debugger;
    let result = state;
    debugger;
    switch (action.type) {
        case 'LOGIN':
            const Token = action.data;
            localStorage.setItem('AwesomeReads', Token);
            getUserInfo()
                .then((res) => {
                    debugger;
                    result = { ...state, user: res };
                }).catch((err) => {
                    debugger;
                    result = { ...state, user: null };
                });
            break;
        case 'LOGOUT':
            localStorage.removeItem('AwesomeReads');
            result = { ...state, user: null };
            break;
    }
    return result;
}