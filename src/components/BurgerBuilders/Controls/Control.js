import React from "react";
import { Card, CardBody, CardHeader, CardFooter } from "reactstrap";
import "../Controls/Control.css"
import BuildControl from "./BuildControl";

const Control = (props) => {
    const controls = [
        {label: "Meat", type:"meat"},
        {label: "Tomato", type:"tomato"},
        {label: "Cheese", type:"cheese"},
        {label: "Lettuse", type:"lettuse"},
    ]

  return (
    <Card className="ingredent-control">
      <CardHeader tag="h4" className="text-center">Add Ingredients</CardHeader>
      <CardBody>
          {
              controls.map(item => {
                  return (
                      <BuildControl label={item.label} type={item.type} added={props.addIngredient} removed={props.removeIngredient}></BuildControl>
                  );
              })
          }
      </CardBody>
      <CardFooter className="text-center" tag="h6">Price : BDT</CardFooter>
    </Card>
  );
};

export default Control;
