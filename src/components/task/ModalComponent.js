import React, { useState } from "react";
import {
  Col,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
  Label,
  Form,
  Row,
} from "reactstrap";
import AddCircleOutlinedIcon from "@material-ui/icons/AddCircleOutlined";
import Button from "@material-ui/core/Button";
import moment from "moment";
import { firebase } from "../../firebase";

const taskList = [];

export const TaskModal = ({ project, setTasks, setisSubmitted }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [task, setTask] = useState({
    id: taskList.length,
    title: "",
    description: "",
    date: "",
    time: "",
    group: "Nil",
  });

  function handleChange(e) {
    e.preventDefault();
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    taskList.push(task);
    setTasks(taskList);
    setisSubmitted(true);
  }

  return (
    <>
      <AddCircleOutlinedIcon
        color="secondary"
        fontSize="large"
        onClick={toggle}
      />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Task</ModalHeader>
        <Form onSubmit={() => handleSubmit}>
          <ModalBody>
            <FormGroup row>
              <Label for="title" sm={2}>
                Title
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  value={task.title}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
            <Row>
              <Col xs="6">
                <FormGroup>
                  <Label for="description">Description(Optional)</Label>
                  <Input
                    type="textarea"
                    name="description"
                    id="description"
                    value={task.description}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col xs="6">
                <FormGroup>
                  <Label for="date">Date</Label>
                  <Input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="date placeholder"
                    value={task.date}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Time">Time</Label>
                  <Input
                    type="time"
                    name="time"
                    id="Time"
                    placeholder="time placeholder"
                    value={task.time}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Group">Group</Label>
                  <Input
                    type="select"
                    name="group"
                    id="Group"
                    value={task.group}
                    onChange={handleChange}
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="secondary" onClick={toggle}>
              ADD
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default TaskModal;
