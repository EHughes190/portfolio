import React from "react";
import styles from "./Projects.module.scss";
import { ProjectCard } from "../../components/index";
import projects from "../../data/projects";

//Props are passed from Routes
export const Projects = (): JSX.Element => {
  const projectsJSX = projects.map((projectObj) => (
    <ProjectCard project={projectObj} key={`project:${projectObj.id}`} />
  ));

  return (
    <section
      className={styles.Projects}
    >
      <h3 className={styles.Projects__sectionHeading}>projects</h3>
      <hr className={styles.Projects__line} />
      <div className={styles.ProjectContainer}>{projectsJSX}</div>
    </section>
  );
};
