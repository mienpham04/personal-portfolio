import styles from "./Activity.module.css";
import ActivityItem from "./ActivityItem.jsx";
import activities from "../../data/activities.json";

const Activity = () => {
  return (
    <section className={styles.container} id="activities">
      <h2 className={styles.title}>Activities/ Involvement</h2>
      <div className={styles.projects}>
        {activities.map((act, id) => {
          return (
            <ActivityItem key={id} act={act}/>
          );
        })}
      </div>
    </section>
  );
}

export default Activity