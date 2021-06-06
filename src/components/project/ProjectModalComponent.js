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
import { useProjectsValue } from '../../context/projectContext';
import { generatePushId } from "../randomId";

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
        <AddIcon color="secondary" />
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
          <ModalFooter>
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
