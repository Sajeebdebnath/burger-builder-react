import React from 'react';
import top from "../../../assets/images/top.jpg"
import bottom from "../../../assets/images//bottom.jpg"
import meat from "../../../assets/images/meat.jpg"
import tomato from "../../../assets/images/tomato.jpg"
import cheese from "../../../assets/images/cheese.jpg"
import lettuse from "../../../assets/images/lettuse.jpg"

const Ingredient = (props) => {
    let ingredient_item = null;

    switch(props.type){
        case "meat" :
            ingredient_item = <img src={meat} alt="Meat" className='img-fluid' />
            break;
        case "cheese" :
            ingredient_item = <img src={cheese} alt="Chese" className='img-fluid' />
            break;
        case "tomato" :
            ingredient_item = <img src={tomato} alt="Tomato" className='img-fluid' />
            break;
        case "lettuse" :
            ingredient_item = <img src={lettuse} alt="Lettuse" className='img-fluid' />
            break;
        case "top" :
            ingredient_item = <img src={top} alt="Top" className='img-fluid' />
            break;
        case "bottom" :
            ingredient_item = <img src={bottom} alt="Bottom" className='img-fluid' />
            break;
        default:
            ingredient_item = null;
    }

    return (
        <div className='burger-ingredient'>
                {ingredient_item}
        </div>
    );
};

export default Ingredient;