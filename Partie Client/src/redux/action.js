
export const SET_USER = "SET_USER";


export function setuser(user){
    return {
        type:SET_USER,
        payload:user,
    }
}
