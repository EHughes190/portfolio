import { FaGithub, FaPlay } from "react-icons/fa";
import { Skill } from "../Skill/Skill";
import {Project} from "../../types"
import styles from "./ProjectCard.module.scss";



export type ProjectCardProps = {
  key: string;
  project: Project
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { title, img, description, skills, githubUrl, hostedUrl, id } =
    props.project;

  const skillText = skills.map((skill, index) => {
    return (
     <Skill skill={skill} id={id} index={index} />
    );
  });

  const isHosted = hostedUrl ? true : false;

  return (
    <article className={styles.card} style={{ backgroundImage: `url(${img})` }}>
      <div className={styles.card__content}>
        <div className={styles.card__heading}>
          <h2 className={styles.card__title}>{title}</h2>
          <div className={styles.card__buttons}>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className={styles.card__btn} />
            </a>
            {isHosted && (
              <a
                href={hostedUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FaPlay className={styles.card__btn} />
              </a>
            )}
          </div>
        </div>
        <p className={styles.card__body}>{description}</p>
        <div className={styles.card__skills}>{skillText}</div>
      </div>
    </article>
  );
};
