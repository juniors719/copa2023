import styles from "./Header.module.css";
import logo_copa from "../../../public/logo_copa_branca.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className={styles.header}>
            <Link to="/">
                <img
                    src={logo_copa}
                    alt="Logo da Copa do Mundo Feminina 2023"
                />
            </Link>
            <div className={styles.menuButton} onClick={toggleMenu}>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
            <nav
                className={`${styles.navBar} ${styles.menuSandwich} ${
                    showMenu ? styles.show : ""
                }`}
                onClick={toggleMenu}
            >
                <Link to="/">Home</Link>
                <Link to="fase-de-grupos">Fase de Grupos</Link>
                <Link to="classificacao-por-grupo">Classificação</Link>
                <Link to="oitavas-de-final">Oitavas</Link>
                <Link to="quartas-de-final">Quartas</Link>
                <Link to="semifinal">Semifinais</Link>
                <Link to="final">Final</Link>
            </nav>
        </header>
    );
};

export default Header;
