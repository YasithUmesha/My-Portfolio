import { portfolioData } from "@/data/portfolioData";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} {portfolioData.name}</p>
      <div className={styles.links}>
        {portfolioData.socialLinks.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
