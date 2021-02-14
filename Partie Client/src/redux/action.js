
export const SET_USER = "GET_USER";


export function setuser(todo){
    return {
        type:SET_USER,
        payload:todo,
    }
}
