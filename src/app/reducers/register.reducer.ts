export const Register = (state = {}, action) => {
    switch(action.type){
        case 'ONREGISTER': {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}