import React, { useState } from "react";
import Burger from "./Burger/Burger";
import Control from "./Controls/Control";
import { Container, Row, Col, Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";

const BurgerBuilder = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [purchaseable, setPurchaseable] = useState(false)

  const initialPrice = {
    meat: 60,
    tomato: 5,
    cheese: 20,
    lettuse: 10,
  };

  const [totalPrice, setTotalPrice] = useState(80);
  const [ingredient, setIngredient] = useState([
    { type: "meat", amount: 0 },
    { type: "tomato", amount: 0 },
    { type: "lettuse", amount: 0 },
    { type: "cheese", amount: 0 },
  ]);

  const updatePurchaseable = ingredients => {
      const sum = ingredients.reduce((sum, item)=>{
          return sum + item.amount
      },0)

      setPurchaseable(sum > 0)
}
  const addIngredient = (type) => {
    const newIngredient = [...ingredient];
    const newPrice = totalPrice + initialPrice[type];
    for (let item of newIngredient) {
      if (item.type === type) item.amount++;
    }

    setTotalPrice(newPrice);
    setIngredient(newIngredient);
    updatePurchaseable(newIngredient)
  };

  const removeIngredient = (type) => {
    const newIngredient = [...ingredient];
    const newPrice = totalPrice - initialPrice[type];
    for (let item of newIngredient) {
      if (item.type === type) {
        if (item.amount <= 0) return;
        item.amount--;
      }
    }
    setTotalPrice(newPrice);
    setIngredient(newIngredient);
    updatePurchaseable(newIngredient)
  };



  return (
    <div>
      <Container fluid>
        <Row className="align-items-center">
          <Col md="6" sm="12" style={{ marginTop: "30px" }}>
            <Burger ingredient_items={ingredient}></Burger>
          </Col>
          <Col md="6" sm="12" style={{ marginTop: "30px" }}>
            <Control
              addIngredient={addIngredient}
              removeIngredient={removeIngredient}
              totalPrice={totalPrice}
              isOpen = {isOpen}
              setIsOpen = {setIsOpen}
              purchaseable = {purchaseable}
            ></Control>
          </Col>
        </Row>
      </Container>

      <Modal
        centered
        fullscreen="sm"
        size="md"
        isOpen = {isOpen}
        toggleModal={()=> setIsOpen(!isOpen)}
      >
        <ModalHeader>Your Order Summary</ModalHeader>
        <ModalBody>
          <h5> Total Price : {totalPrice}</h5>
            <ul>
                {
                    ingredient.map(item => <li style={{textTransform : "capitalize"}}>{item.type} : {item.amount}</li>)
                }
            </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Continue Checkout</Button>
          <Button  onClick={()=> setIsOpen(!isOpen)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default BurgerBuilder;
