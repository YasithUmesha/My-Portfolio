import { portfolioData } from "@/data/portfolioData";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header} id="home">
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="#home" className={styles.brand}>
          {portfolioData.name}
        </a>

        <div className={styles.links}>
          {portfolioData.navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
