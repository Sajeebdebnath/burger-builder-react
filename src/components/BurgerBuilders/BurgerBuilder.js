import React, { useState } from 'react';
import Burger from './Burger/Burger';
import Control from './Controls/Control';
import { Container, Row, Col } from 'reactstrap';



const BurgerBuilder = () => {
    const [ingredient, setIngredient] = useState([
        {type: "meat", amount: 0},
        {type: "tomato", amount: 0},
        {type: "lettuse", amount: 1},
        {type: "cheese", amount: 1}
    ])

    const addIngredient = type => {
        const newIngredient = [...ingredient];
        for(let item of newIngredient)
        {
            if(item.type === type) item.amount++
        }
        setIngredient(newIngredient)
    }

    const removeIngredient = type => {
        const newIngredient = [...ingredient]
        for(let item of newIngredient){
            if(item.type === type) {
                if(item.amount <= 0) return;
                item.amount--
            }
        }
        setIngredient(newIngredient)
    } 
    return (
        <Container fluid>
            <Row className='align-items-center'>
                <Col md="6" sm="12" style={{marginTop:"30px"}}>
                    <Burger ingredient_items={ingredient}></Burger>
                </Col>
                <Col md="6" sm="12" style={{marginTop:"30px"}}>
                    <Control addIngredient = {addIngredient} removeIngredient={removeIngredient}></Control>
                </Col>
            </Row>
        </Container>
    );
};

export default BurgerBuilder;