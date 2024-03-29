import { ADD_INGREDIENT, REMOVE_INGREDIENT, UPDATE_PURCHASEABLE, RESET_INGREDIENT, LOAD_ORDERS, FETCH_FAILD_ORERS } from "../actions/BurgerBuilderAction";
import {AUTH_SUCCESS, AUTH_LOGOUT, AUTH_LOADING, AUTH_FAILD} from  "../actions/AuthActions"

const initialPrice = {
    meat: 60,
    tomato: 5,
    cheese: 20,
    lettuse: 10,
  };

const INITIAL_STATE = {
    ingredient : [
        { type: "meat", amount: 0 },
        { type: "tomato", amount: 0 },
        { type: "lettuse", amount: 0 },
        { type: "cheese", amount: 0 },
      ],
      purchaseable : false,
      totalPrice : 80,
      orders : [],
      orderLoad : true,
      orderError : false,
      token : null,
      userId : null,
      authLoading : false,
      authErrorMsg : null 
}


export const BuildReducer = (state = INITIAL_STATE, action) => {
    const newIngredient = [...state.ingredient];

    switch(action.type){
        case ADD_INGREDIENT :{
            for (let item of newIngredient) {
            if (item.type === action.payload) item.amount++;
            }
            return {...state, ingredient: newIngredient, totalPrice: state.totalPrice + initialPrice[action.payload]}
        }
        case REMOVE_INGREDIENT: {
            for (let item of newIngredient) {
                if (item.type === action.payload) {
                  if (item.amount <= 0) return state;
                  item.amount--;
                }
              }
              return {...state, ingredient: newIngredient, totalPrice: state.totalPrice - initialPrice[action.payload]}
        }

        case UPDATE_PURCHASEABLE: {
            const sum = state.ingredient.reduce((sum, element)=>{
                return sum + element.amount
            },0)
            return {...state, purchaseable: sum > 0}
        }

        case RESET_INGREDIENT : {
            return {
                ...state,
                ingredient : [
                    { type: "meat", amount: 0 },
                    { type: "tomato", amount: 0 },
                    { type: "lettuse", amount: 0 },
                    { type: "cheese", amount: 0 },
                  ],
                purchaseable : false,
                totalPrice : 80
            }
        }

        case LOAD_ORDERS: {
            let ordersArr = []

            for(let key in action.payload){
                ordersArr.push({
                    ...action.payload[key],
                    id : key
                })
            }

            return {
                ...state, 
                orders : ordersArr,
                orderLoad : false,
                orderError : false
            }
        }

        case FETCH_FAILD_ORERS: {
            return {
                ...state, 
                orderError : true,
                orderLoad : false
            }
        }

        //Auth 

        case AUTH_SUCCESS : {
            return {
                ...state,
                token : action.payload.token,
                userId : action.payload.userId,
                authErrorMsg : null
            }
        }

        case AUTH_LOGOUT : {
            return {
                ...state,
                token : null,
                userId : null,
                authErrorMsg : null,

            }
        }

        case AUTH_LOADING:{
            return {
                ...state,
                authLoading : action.payload
            }
        }
        case AUTH_FAILD:{
            return {
                ...state,
                authErrorMsg : action.payload,
            }
        }

        default :
         return state;
    }
}