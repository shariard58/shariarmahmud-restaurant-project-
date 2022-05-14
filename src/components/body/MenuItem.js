import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

const MenuItem = (props) => {
  console.log(props);
  return (
    <div>
      <Card style={{ margin: "10px" }}>
        <CardBody>
          <CardImg
            width="100%"
            src={props.dish.image}
            alt={props.dish.name}
            style={{ opacity: "0.65" }}
          />

          <CardImgOverlay>
            <CardTitle
              style={{ cursor: "pointer", fontWeight: "bolder" }}
              onClick={() => props.onDishSelect(props.dish)}
            >
              {" "}
              {props.dish.name}
            </CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItem;
