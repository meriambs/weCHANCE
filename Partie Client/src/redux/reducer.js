import {SET_USER}from './action';

const initialState = {
   
   name:'duda',
   lastName:'dudo',
   email:'duda@gmail.com'
  
 }


export default function (state = initialState,  action){
    let newstate;
    switch( action.type){
        case SET_USER:
            return{
                ...state,
                initialState: newstate,
            }
            default:
                return state;

    }  
}