export const Expense = (state = {}, action) => {
    switch (action.type){
        case 'ONEXPENSELOAD': {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}