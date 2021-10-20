import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function Doctor({ doctor }) {
  const { img, name } = doctor;
  return (
    <div class="col ">
      <Card>
        <CardImg
          style={{ height: "350px" }}
          top
          width="100%"
          src={img}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default Doctor;
