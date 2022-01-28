import axios from "axios";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const UPDATE_PURCHASEABLE = "UPDATE_PURCHASEABLE";
export const RESET_INGREDIENT = "RESET_INGREDIENT"
export const LOAD_ORDERS = "LOAD_ORDERS"
export const FETCH_FAILD_ORERS = "FETCH_FAILD_ORERS"

export const addIngredient = (igType) => {
    return {
        type : ADD_INGREDIENT,
        payload : igType
    }
}

export const removeIngredient = (igType) => {
    return {
        type : REMOVE_INGREDIENT,
        payload : igType
    }
}

export const updatePurchaseable = ()=>{
    return{
        type : UPDATE_PURCHASEABLE
    }
}

export const restIngredient = () =>{
    return {
        type : RESET_INGREDIENT
    }
}

export const loadOrders = (orders) => {
    return {
        type : LOAD_ORDERS,
        payload : orders
    }
}

export const faildOrders = ()=>{
    return {
        type : FETCH_FAILD_ORERS
    }
}

export const fetchOrdersAll = () => dispatch => {
    axios.get("https://burger-builder-87d38-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json")
    .then(res => {
        dispatch(loadOrders(res.data))
    })
    .catch(err => {
       dispatch(faildOrders(err))
    })
} 