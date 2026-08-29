import { portfolioData } from "@/data/portfolioData";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Projects</p>
        <h2>Selected work and product ideas.</h2>

        <div className={styles.grid}>
          {portfolioData.projects.map((project) => (
            <article key={project.name} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={project.image} alt={project.name} />
              </div>
              <div className={styles.body}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className={styles.tags}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className={styles.actions}>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Repository
                  </a>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live preview
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
