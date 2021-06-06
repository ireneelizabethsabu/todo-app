import React, { useState } from "react";
import { useSelectedProjectsValue } from "../../context/selectedProjectContext";
import { useProjectsValue } from "../../context/projectContext";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { firebase } from "../../firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

export const Project = ({ project }) => {
  const [showConfirm, setshowConfirm] = useState(false);
  const { setSelectedProjects } = useSelectedProjectsValue();
  const { projects, setProjects } = useProjectsValue();
  const [isShown, setIsShown] = useState('d-none');

  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection("projects")
      .doc(docId)
      .delete()
      .then(() => {
        setProjects([...projects]);
        setSelectedProjects('HOME');
      });
  };
  return (
    <>
      <div className="d-flex " onMouseEnter={() => setIsShown('d-block')} onMouseLeave={()=> setIsShown('d-none')}>
      <span className="flex-fill pl-4">{project.name}</span>
      <DeleteIcon className ={isShown}
      onClick={() => setshowConfirm(!showConfirm)}  
        color="error"/>
      </div>
      <Modal isOpen={showConfirm}>
        <ModalBody className="text-center delete">
          <h5>Confirm Deletion</h5>
          Are you sure you want to delete this project?
        </ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            color="secondary"
            onClick={() => {
              setshowConfirm(!showConfirm);
            }}>
            CANCEL
          </Button>
          <Button
            type="submit"
            color="secondary"
            onClick={() => {
              deleteProject(project.docId);
            }}
          >
            DELETE
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
