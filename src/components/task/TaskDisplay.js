import React from "react";
import { Container } from "reactstrap";
import { useTasks } from "../../hooks/index";
import { CheckBox } from "./CheckBox";
import { collatedTasks, collatedTasksExists } from "../../hooks";
import { useSelectedProjectsValue } from "../../context/selectedProject";
import { useProjectsValue } from "../../context/project";

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
    if(getTitle(projects, selectedProjects))
      projectName = getTitle(projects, selectedProjects).name;
  }
  if (selectedProjects && collatedTasksExists(selectedProjects)) {
    if(getCollatedTitle(collatedTasks, selectedProjects))
      projectName = getCollatedTitle(collatedTasks, selectedProjects).name ;
  }

  return (
    <>
      <h3 className="text-center py-3 text-uppercase">{projectName}</h3>
      <Container data-bs-spy="scroll" data-bs-offset="0" tabIndex="0">
        {tasks.map((task) => (
          <div key={`${task.id}`} className="task-div">
              <CheckBox id={task.id} />
              <span>{task.title}</span>
              <span>{task.time}</span>      
          </div>
        ))}
      </Container>
    </> 
  );
};
