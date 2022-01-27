import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addIngredient,
  removeIngredient,
  updatePurchaseable,
} from "../../redux/actions/BurgerBuilderAction";
import Burger from "./Burger/Burger";
import Control from "./Controls/Control";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

function mapStateToProps(state) {
  return {
    ingredient: state.ingredient,
    totalPrice: state.totalPrice,
    purchaseable: state.purchaseable,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (igType) => dispatch(addIngredient(igType)),
    removeIngredient: (igType) => dispatch(removeIngredient(igType)),
    updatePurchaseable: () => dispatch(updatePurchaseable()),
  };
};

const BurgerBuilder = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const addIngredientHandle = (type) => {
    props.addIngredient(type);
    props.updatePurchaseable();
  };

  const removeIngredientHandle = (type) => {
    props.removeIngredient(type);
    props.updatePurchaseable();
  };
  const handleChcekout = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <Container fluid>
        <Row className="align-items-center">
          <Col md="6" sm="12" style={{ marginTop: "30px" }}>
            <Burger ingredient_items={props.ingredient}></Burger>
          </Col>
          <Col md="6" sm="12" style={{ marginTop: "30px" }}>
            <Control
              addIngredient={addIngredientHandle}
              removeIngredient={removeIngredientHandle}
              totalPrice={props.totalPrice}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              purchaseable={props.purchaseable}
            ></Control>
          </Col>
        </Row>
      </Container>

      <Modal
        centered
        fullscreen="sm"
        size="md"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(!isOpen)}
      >
        <ModalHeader>Your Order Summary</ModalHeader>
        <ModalBody>
          <h5> Total Price : {props.totalPrice}</h5>
          <ul>
            {props.ingredient.map((item) => (
              <li style={{ textTransform: "capitalize" }}>
                {item.type} : {item.amount}
              </li>
            ))}
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button style={{backgroundColor: "#8b0230", border: "none"}} onClick={handleChcekout}>
            Continue Checkout
          </Button>
          <Button onClick={() => setIsOpen(!isOpen)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
