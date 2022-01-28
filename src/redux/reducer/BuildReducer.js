import { ADD_INGREDIENT, REMOVE_INGREDIENT, UPDATE_PURCHASEABLE, RESET_INGREDIENT, LOAD_ORDERS } from "../actions/BurgerBuilderAction";

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
      orderError : false
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
                orderLoad : false
            }
        }

        default :
         return state;
    }
}