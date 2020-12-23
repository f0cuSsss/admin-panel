const INITIAL_STATE = {
    isSignedIn: false
};


export default (state = INITIAL_STATE, action) => {
    switch(action.payload){
        case 'SIGN_IN':
            return { ...state, isSignedIn: true}
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false }
        default:
            return state;
    }
}