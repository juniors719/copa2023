import styles from "./Header.module.css";
import logo_copa from "../../../public/logo_copa_branca.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Link to="/">
                    <img
                        src={logo_copa}
                        alt="Logo da Copa do Mundo Feminina 2023"
                    />
                </Link>
                <h1 className={styles.header_title}>
                    Tabela da Copa do Mundo de Futebol Feminino 2023
                </h1>
            </header>
        </>
    );
};

export default Header;
