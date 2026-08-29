import { portfolioData } from "@/data/portfolioData";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Contact</p>
        <h2>Let’s build something meaningful.</h2>

        <div className={styles.card}>
          <div>
            <p>Email</p>
            <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
          </div>
          <div>
            <p>GitHub</p>
            <a href={portfolioData.contact.github} target="_blank" rel="noreferrer">
              github.com/YasithUmesha
            </a>
          </div>
          <div>
            <p>LinkedIn</p>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
