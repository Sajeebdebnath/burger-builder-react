import React from 'react';
import Ingredient from '../Ingredient/Ingredient';
import "../Burger/Burger.css"

const Burger = (props) => {

    let ingredient_array = props.ingredient_items.map(item => {
        let amount_arr = [...Array(item.amount).keys()]
        return amount_arr.map(()=>{
            return(
                <Ingredient type={item.type} key={Math.random()}></Ingredient>
            );
        })
    })
    .reduce((arr,element)=>{
        return arr.concat(element) 
    }, [])


    if(ingredient_array.length === 0){
        ingredient_array = <p className='text-center'>Please add some Ingredient</p>
    }
    return (
        <div className='ingredient-wrapper'>
            <Ingredient type={"top"}></Ingredient>
            {ingredient_array}
            <Ingredient type={"bottom"}></Ingredient>
        </div>
    );
};

export default Burger;