import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <ul>
                <li>
                    <Link to="/">Grupos</Link>
                </li>
                <li>
                    <Link to="fase-de-grupos">Jogos da Fase de Grupos</Link>
                </li>
                <li>
                    <Link to="classificacao-por-grupo">
                        Classificação por Grupo
                    </Link>
                </li>
                <li>
                    <Link to="oitavas-de-final">Oitavas de Final</Link>
                </li>
                <li>
                    <Link to="quartas-de-final">Quartas de Final</Link>
                </li>
                <li>
                    <Link to="semifinal">Semifinal</Link>
                </li>
                <li>
                    <Link to="final">Final</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
