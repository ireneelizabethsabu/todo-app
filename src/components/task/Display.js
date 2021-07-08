import React from "react";
import { Container, Row } from "reactstrap";
import { useTasks } from "../../hooks/index";
import { collatedTasks, collatedTasksExists } from "../../hooks";
import { useSelectedProjectsValue } from "../../context/selectedProject";
import { useProjectsValue } from "../../context/project";
import './task.css';
import Card from './Card';

const getTitle = (projects, projectId) =>
  projects.find((project) => project.projectId === projectId);

const getCollatedTitle = (projects, key) =>
  projects.find((project) => project.key === key);

export const TaskDisplay = () => {
  const { selectedProjects } = useSelectedProjectsValue();
  const { tasks } = useTasks(selectedProjects);
  const { projects } = useProjectsValue();

  let projectName = "";

  if (projects && selectedProjects && !collatedTasksExists(selectedProjects)) {
    if (getTitle(projects, selectedProjects))
      projectName = getTitle(projects, selectedProjects).name;
  }
  if (selectedProjects && collatedTasksExists(selectedProjects)) {
    if (getCollatedTitle(collatedTasks, selectedProjects))
      projectName = getCollatedTitle(collatedTasks, selectedProjects).name;
  }

  return (
    <>
      <h3 className="text-center py-3 text-uppercase">{projectName}</h3>
      <Container >
        <Row>
          {tasks.map((task) => (
            <Card task={task} key={`${task.id}`}/>
          ))}
        </Row>
      </Container>
    </>
  );
};
