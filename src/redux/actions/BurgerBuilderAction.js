export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const UPDATE_PURCHASEABLE = "UPDATE_PURCHASEABLE";


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