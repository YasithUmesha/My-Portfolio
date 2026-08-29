import { portfolioData } from "@/data/portfolioData";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Skills</p>
        <h2>Tools and technologies I work with.</h2>

        <div className={styles.grid}>
          {portfolioData.skills.map((group) => (
            <div key={group.category} className={styles.group}>
              <h3>{group.category}</h3>
              <div className={styles.tags}>
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
