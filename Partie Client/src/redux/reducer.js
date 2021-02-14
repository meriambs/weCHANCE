import { SET_USER } from './action';

const initialState = {
    user:{
   name: 'duda',
    lastName: 'dudo',
    email: 'duda@gmail.com'
    },
 

}


export let reducer = (state = initialState, action) => {
    console.log('action', action)
    switch (action.type) {
        case SET_USER:
            return {
                                ...state,

                user: action.payload,
            }
        default:
            return state;

    }
}