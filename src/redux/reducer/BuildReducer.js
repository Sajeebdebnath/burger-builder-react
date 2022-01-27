import { ADD_INGREDIENT, REMOVE_INGREDIENT, UPDATE_PURCHASEABLE  } from "../actions/BurgerBuilderAction";

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
      totalPrice : 80
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
        default :
         return state;
    }
}