import React from "react";
import { useSelectedProjectsValue } from "../../context/selectedProject";
import { useProjectsValue } from "../../context/project";
import { ListGroupItem } from "reactstrap";
import { Project } from "./Project";

export const ProjectList = ({active,setActive}) => {
  const { setSelectedProjects } = useSelectedProjectsValue();
  const { projects } = useProjectsValue();
  
  return (
    projects &&
    projects.map((project) => (
      <ListGroupItem
        role="button"
        key={project.projectId}
        data-doc-id={project.docId}
        className={active === project.projectId ? 'active-item' : undefined}
        onClick={() => {
          setSelectedProjects(project.projectId);
          setActive(project.projectId);
        }}
        onKeyDown={() => {
          setSelectedProjects(project.projectId);
          setActive(project.projectId);
        }}
      >
        <Project project={project} />
      </ListGroupItem>
    ))
  );
};
