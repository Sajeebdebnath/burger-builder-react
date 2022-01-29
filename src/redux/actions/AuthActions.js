import axios from "axios"

export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILD = "AUTH_FAILD";
export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_LOGOUT = "AUTH_LOGOUT";


export const auth_success = (token, userId) => {
    return {
        type : AUTH_SUCCESS,
        payload : {
            token : token,
            userId : userId
        }
    }
} 

export const auth =(email,password,switchUser) => dispatch => {
    const authData = {
        email : email,
        password : password,
        returnSecureToken : true
    }
    const KEY = "AIzaSyDVywGOUDuHfHR2ub1JKvtfllwCPPshsNg";

    let auth_url = null
    if(switchUser){
        auth_url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
    }else{
        auth_url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
    }
    
    axios.post(auth_url+KEY,authData)
    .then(res => {
        dispatch(auth_success(res.data.idToken, res.data.localId))
    })
}
