import React, { useState } from "react";
import {
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ListGroupItem
} from "reactstrap";
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button";
import { firebase } from "../../firebase";
import { useProjectsValue } from '../../context/project';
import { generatePushId } from "../randomId";
import './project.css';
import Tooltip from "@material-ui/core/Tooltip";

export const ProjectModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [projectName, setProjectName] = useState('');
  const projectId = generatePushId();
  const { setProjects } = useProjectsValue();

  const addProject = () => 
    projectName &&
      firebase
        .firestore()
        .collection('projects')
        .add({
          projectId: projectId,
          name: projectName,
          userId: 'srktevqdreoltivxthgr',
        })
        .then(() => {
          setProjects([]);
          setProjectName('');
        });

  return (
    <ListGroupItem onClick={toggle}>
      <div className="d-flex ">
        <span className="flex-fill project-heading">PROJECTS</span>
        <Tooltip title="add project" arrow>
        <AddIcon color="secondary" />
        </Tooltip>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Project</ModalHeader>
          <ModalBody>
              <Input
                type="text"
                name="project"
                id="project"
                placeholder="Project/Folder Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
          </ModalBody>
          <ModalFooter className="justify-content-center border-top-0">
            <Button
              color="secondary"
              onClick={() => {
                toggle();
                addProject();
              }}
            >
              ADD
            </Button>
          </ModalFooter> 
      </Modal>
    </ListGroupItem>
  );
};
