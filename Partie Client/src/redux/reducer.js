import { SET_USER } from './action';

const initialState = {
    user:{
   name: 'duda',
    lastName: 'dudo',
    email: 'duda@gmail.com'
    },
 

}


export let reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                user: action.payload,
                ...state,
            }
        default:
            return state;

    }
}