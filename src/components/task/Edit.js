// import React,{useState} from "react";
// import {
//     Col,
//     Input,
//     Modal,
//     ModalBody,
//     ModalFooter,
//     ModalHeader,
//     FormGroup,
//     Label,
//     Form,
//     Row
//   } from "reactstrap";
// //import { firebase } from "../../firebase";
// import { useProjectsValue } from "../../context/project";
// import { useTaskForm } from "../../hooks/index";
// import EditIcon from "@material-ui/icons/Edit";
// import IconButton from "@material-ui/core/IconButton";
// import Tooltip from "@material-ui/core/Tooltip";
// import Button from "@material-ui/core/Button";

// export const Edit = ({ curTask }) => {
//     const [modal, setModal] = useState(false);
//     const toggle = () => setModal(!modal);
//     const { projects } = useProjectsValue();
//     const { handleUpdate, handleChange, task } = useTaskForm();
    
// //   const updateTask = () => {
// //     firebase.firestore().collection("tasks").doc(task.id).update(task);
// //   };

//   return (
//       <>

//     <IconButton
//       onClick={() => setModal(!modal)}>
//       <Tooltip title="edit" arrow>
//         <EditIcon/>
//       </Tooltip>
//     </IconButton>
//     <Modal isOpen={modal} toggle={toggle}>
//         <ModalHeader toggle={toggle}>Update Task</ModalHeader>
//         <Form onSubmit={handleUpdate}>
//           <ModalBody>
//             <FormGroup row>
//               <Label for="title" sm={2}>
//                 Title
//               </Label>
//               <Col sm={10}>
//                 <Input
//                   type="text"
//                   name="title"
//                   id="title"
//                   value={task.title}
//                   onChange={handleChange}
//                 />
//               </Col>
//             </FormGroup>
//             <Row>
//               <Col xs="6">
//                 <FormGroup>
//                   <Label for="description">Description(Optional)</Label>
//                   <Input
//                     type="textarea"
//                     name="description"
//                     id="description"
//                     value={task.description}
//                     onChange={handleChange}
//                   />
//                 </FormGroup>
//               </Col>
//               <Col xs="6">
//                 <FormGroup>
//                   <Label for="date">Date</Label>
//                   <Input
//                     type="date"
//                     name="date"
//                     id="date"
//                     placeholder="Choose due date"
//                     value={task.date}
//                     onChange={handleChange}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <Label for="Time">Time</Label>
//                   <Input
//                     type="time"
//                     name="time"
//                     id="Time"
//                     placeholder="time placeholder"
//                     value={task.time}
//                     onChange={handleChange}
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <Label for="Group">Group</Label>
//                   <Input
//                     type="select"
//                     name="group"
//                     id="Group"
//                     value={task.group}
//                     onChange={handleChange}
//                   >
//                     {projects.map((project) => (
//                       <option key={`${project.projectId}`} value={`${project.projectId}`}>
//                         {project.name}
//                       </option>
//                     ))}
//                   </Input>
//                 </FormGroup>
//               </Col>
//             </Row>
//           </ModalBody>
//           <ModalFooter className="justify-content-center border-top-0 p-3">
//             <Button type="submit" color="secondary" onClick={toggle} className="mx-3">
//               Cancel
//             </Button>
//             <Button type="submit" color="secondary" onClick={toggle} className="mx-3">
//               Update
//             </Button>
//           </ModalFooter>
//         </Form>
//       </Modal>
//     </>
//   );
// };
