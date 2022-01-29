import React from "react";
import "../OrderSummary/OrderDetails.css";

const OrderDetails = (props) => {
  const ingredient_details = props.order.ingredient
    .filter(item => item.amount !== 0)
    .map((item) => {
      return (
        <span key={Math.random()} className="ingredient-item">
          <span>{item.amount}x </span>
          <span className="capiltized">{item.type}</span>
        </span>
      );
    });
  return (
    <div className="order-details">
        <p>Order Number : {props.order.id} </p>
        <hr />
        {ingredient_details}
        <hr />
        <h5>Price: {props.order.price} BDT</h5>
    </div>
  );
};

export default OrderDetails;
