import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComments from "./LoadComments";

const DishDetail = (props) => {
  console.log(props.dish);

  //   const loadComments = props.dish.comments.map((comnt) => {
  //     <LoadComments scomment={comnt} />;
  //   });

  return (
    <div>
      <Card style={{ marginTop: "25px", marginLeft: "15px" }}>
        <CardImg top src={props.dish.image} alt={props.dish.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle style={{ fontWeight: "bold" }}>
            {props.dish.name}
          </CardTitle>

          <CardText>
            <p> {props.dish.description} </p>
            <p> {props.dish.price} </p>
          </CardText>

          <hr />

          <LoadComments comments={props.dish.comments} />
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetail;
