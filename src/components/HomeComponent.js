import React from "react";
import { Navbar, NavbarBrand, Col, Row } from "reactstrap";
import { theme } from "../theme";
import { ThemeProvider } from "@material-ui/styles";
import {TaskDisplay} from "./task/TaskDisplayComponent";
import SideMenu from "./SideMenuComponent";
import TaskModal from "./task/ModalComponent";
import { SelectedProjectProvider } from "../context/selectedProjectContext";
import { ProjectProvider } from "../context/projectContext";

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
