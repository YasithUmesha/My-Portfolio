import { portfolioData } from "@/data/portfolioData";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.headingWrap}>
          <p className={styles.eyebrow}>About me</p>
          <h2>Building useful products with a curious mind.</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.textBlock}>
            {portfolioData.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.stats}>
            {portfolioData.stats.map((item) => (
              <div key={item.label} className={styles.statCard}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
