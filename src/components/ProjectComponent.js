import React, { useState } from "react";
import {
  Input,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  ModalHeader,
} from "reactstrap";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

const projectList = [];

export const Project = () => {
  const [title, setTitle] = useState("");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    projectList.push(title);
  }

  return (
    <ListItem onClick={toggle}>
        <ListItemText>PROJECTS</ListItemText>
        <ListItemIcon>
        <AddCircleOutlinedIcon color="secondary" />
        </ListItemIcon>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Project</ModalHeader>
        <Form onSubmit={() => handleSubmit}>
            <ModalBody>
            <FormGroup>
                <Label for="project">Project Name</Label>
                <Input
                type="text"
                name="project"
                id="project"
                onChange={handleChange}
                />
            </FormGroup>
            </ModalBody>
            <ModalFooter>
            <Button type="submit" color="secondary" onClick={toggle}>
                ADD
            </Button>
            </ModalFooter>
        </Form>
        </Modal>
    </ListItem>
  );
};

