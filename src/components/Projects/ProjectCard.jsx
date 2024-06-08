import styles from "./ProjectCard.module.css";
import { getImageURL } from "../../utils";

const ProjectCard = ({prj}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageURL(prj.imageSrc)}
        alt={`Image of ${prj.title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{prj.title}</h3>
      <p className={styles.description}>{prj.description}</p>
      <ul className={styles.skills}>
        {prj.skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={prj.demo} className={styles.link}>
          Demo
        </a>
        <a href={prj.source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
