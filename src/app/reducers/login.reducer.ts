export const Login = (state = {}, action) => {
    switch (action.type){
        case 'ONLOGIN': {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}