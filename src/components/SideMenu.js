import React, { useState } from "react";
import { Col, ListGroup, ListGroupItem } from "reactstrap";
import { ProjectModal } from './project/ProjectModal';
import { useSelectedProjectsValue } from "../context/selectedProject";
import { ProjectList } from './project/ProjectList';

const SideMenu = () => {
  const { setSelectedProjects } = useSelectedProjectsValue();
  const [active, setActive] = useState('home');
  //const [showProjects, setshowProjects] = useState(true);

  return (
    <Col xs="4" sm="3" className="left-part">
      <ListGroup >
        <ListGroupItem
          role="button"
          className={`text-center ${active === 'home' ? 'active-item' : undefined}`} 
          onClick={() => {
            setActive('home');
            setSelectedProjects('HOME');
          }}
        >
          Home
        </ListGroupItem>
        <ListGroupItem
          role="button"
          className={`text-center ${active === 'today' ? 'active-item' : undefined}`} 
          onClick={() => {
            setActive('today');
            setSelectedProjects('TODAY');
          }}
        >
          Today
        </ListGroupItem>
        <ListGroupItem
          role="button"
          className={`text-center ${active === 'week' ? 'active-item' : undefined}`} 
          onClick={() => {
            setActive('week');
            setSelectedProjects('WEEK');
          }}
        >
          This week
        </ListGroupItem>
      </ListGroup>
      <ProjectModal />
      <ListGroup >
        { <ProjectList active={active} setActive={setActive} />}</ListGroup>
    </Col>
  );
};

export default SideMenu;
