import React from "react";
import {
  Col,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import {Project} from './ProjectComponent';

const ListGrpItem = ({ text }) => {
  return (
    <ListGroupItem tag="a" href="#">
      {text}
    </ListGroupItem>
  );
};

const SideMenu = () => {
  return (
    <Col xs="3" className="left-part">
      <ListGroup className="text-center">
        <ListGrpItem text={"Home"} />
        <ListGrpItem text={"Today"} />
        <ListGrpItem text={"This week"} />
        <Project/>
      </ListGroup>
    </Col>
  );
};

export default SideMenu;
