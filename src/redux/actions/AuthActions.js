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

export const authLoading = (isLoading) => {
    return {
        type : AUTH_LOADING,
        payload : isLoading
    }
}

export const authFaild = (erroMsg) =>{
    return {
        type : AUTH_FAILD,
        payload : erroMsg
    }
} 

export const auth =(email,password,switchUser) => dispatch => {
    dispatch(authLoading(true))
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
        dispatch(authLoading(false))
        localStorage.setItem("token", res.data.idToken)
        localStorage.setItem("userId", res.data.localId)
        const expireTime = new Date(new Date().getTime() + res.data.expiresIn * 1000)
        localStorage.setItem("expireTime", expireTime)

        dispatch(auth_success(res.data.idToken, res.data.localId))
        console.log(expireTime)
    })
    .catch(err => {
        dispatch(authLoading(false))
        dispatch(authFaild(err.response.data.error.message))
    })
}




export const authLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("expireTime")

    return {
        type : AUTH_LOGOUT
    }
} 

export const auth_check= () => dispatch =>{
    const token = localStorage.getItem("token");

    if(!token){
        dispatch(authLogout())
    }else {
        const expireTime = new Date(localStorage.getItem('expireTime'))
        if(expireTime <= new Date()){
            dispatch(authLogout())
        }else {
            const userId = localStorage.getItem("userId")
            dispatch(auth_success(token,userId))

        }
    }
}
