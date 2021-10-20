import React from "react";
import { useHistory } from "react-router";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";

function Service({ service }) {
  const { id, img, name, description } = service;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/service/details/${id}`);
  };
  return (
    <div className="col">
      <Card>
        <CardImg
          style={{ objectFit: "cover" }}
          top
          width="100%"
          height="250px"
          src={img}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>

          <p className="card-text text-truncate">{description}</p>
          <Button onClick={handleClick}>Details</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Service;
