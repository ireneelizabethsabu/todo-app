import React from "react";
import { useSelectedProjectsValue } from "../context/selectedProjectContext";
import { useProjectsValue } from "../context/projectContext";
import { ListGroupItem } from "reactstrap";
import { Project } from "./ProjectComponent";

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
