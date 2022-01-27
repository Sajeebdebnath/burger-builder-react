import React, {useState} from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import "../Checkout/Checkout.css";


function mapStateToProps(state) {
    return {
        totalPrice : state.totalPrice,
        purchaseable : state.purchaseable
    }
  }

const Checkout = (props) => {

  const [shippingAddress, setShippingAddress] = useState(    
            {
                values : {
                    deliveryAddress : "",
                    phone : "",
                    paymentType : "cash on delivery"
                }
            }
  )

  const navigate = useNavigate()
  const goBack = () => {
    navigate("/")
  }

  const inputHandle = (event) => {

      setShippingAddress({
          values: {
              ...shippingAddress.values,
              [event.target.name] : [event.target.value]
          }
      })
  }

  const handlePlaceOrder = () => {
      console.log(shippingAddress)
  }
  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col md={{ size: "8", offset: "2" }}>
            <div className="payment-information">
              <h4>Payment: {props.totalPrice} BDT</h4>
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={{ size: "8", offset: "2" }}>
            <div className="shipping-form">
              <Form>
                <FormGroup>
                  <Input
                    name="deliveryAddress"
                    type="textarea"
                    placeholder="Your Address"
                    value={shippingAddress.values.deliveryAddress}
                    onChange={(event)=> inputHandle(event)}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    name="phone"
                    placeholder="Your Phone Number"
                    type="text"
                    value={shippingAddress.values.phone}
                    onChange={(event)=> inputHandle(event)}
                  />
                </FormGroup>

                <FormGroup>
                  <Input name="paymentType" type="select" value={shippingAddress.values.paymentType} onChange={(event)=> inputHandle(event)}>
                    <option value="cash on deliveray">Cash On Delivery</option>
                    <option value="bkash">Bkash</option>
                    <option value="nagad">Nagad</option>
                    <option value="rocket">Rocket</option>
                  </Input>
                </FormGroup>

                <Button
                  style={{
                    backgroundColor: "#8b0230",
                    marginRight: "10px",
                    borderColor: "#8b0230",
                  }}

                  disabled ={!props.purchaseable}
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </Button>
                <Button onClick={goBack}>Cancel</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps)(Checkout);
