import React from "react";
import { Navbar, NavbarBrand, Col, Row } from "reactstrap";
import { theme } from "../theme";
import { ThemeProvider } from "@material-ui/styles";
import {TaskDisplay} from "./task/Display";
import SideMenu from "./SideMenu";
import TaskModal from "./task/Modal";
import { SelectedProjectProvider } from "../context/selectedProject";
import { ProjectProvider } from "../context/project";
//import Footer from './Footer';

const Home = () => {
  return (
    <SelectedProjectProvider>
      <ProjectProvider>
        <div>
          <ThemeProvider theme={theme}>
            <Navbar className="navbar" expand="md">
              <NavbarBrand href="/" className="navbar-brand">
                TODO
              </NavbarBrand>
            </Navbar>
            <Row>
              <SideMenu />
              <Col className="right-part">
                <TaskModal />
                <TaskDisplay />
              </Col>
            </Row>
          </ThemeProvider>
        </div>
      </ProjectProvider>
    </SelectedProjectProvider>
  );
};

export default Home;
