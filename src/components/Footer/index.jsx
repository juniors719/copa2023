import styles from "./Footer.module.css";

import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_divcolors}>
                <div className={styles.footer_divcolors_div1} />
                <div className={styles.footer_divcolors_div2} />
                <div className={styles.footer_divcolors_div3} />
                <div className={styles.footer_divcolors_div4} />
            </div>
            <div className={styles.github_link}>
                <a
                    href="https://github.com/juniors719"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>Feito por Júnior Silva </span>
                    <FaGithub />
                </a>
            </div>
            <div className={styles.footer_divcolors}>
                <div className={styles.footer_divcolors_div5} />
                <div className={styles.footer_divcolors_div6} />
                <div className={styles.footer_divcolors_div7} />
                <div className={styles.footer_divcolors_div8} />
            </div>
        </footer>
    );
};

export default Footer;
