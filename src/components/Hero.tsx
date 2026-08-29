import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.label}>Hi, I am</p>
        <h1>{portfolioData.name}</h1>
        <h2>{portfolioData.title}</h2>
        <p className={styles.subtitle}>{portfolioData.subtitle}</p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.primaryButton}>View projects</a>
          <a href="#contact" className={styles.secondaryButton}>Contact me</a>
        </div>

        <div className={styles.socials}>
          {portfolioData.socialLinks.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer" aria-label={link.label}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.card}>
          <Image src="/avatar.svg" alt="Yasith Umesha portrait" width={420} height={420} priority />
        </div>
      </div>
    </section>
  );
}
