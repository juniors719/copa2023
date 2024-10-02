import { useEffect, useState } from "react";
import styles from "./Card.module.css";

const Card = () => {
    const [grupos, setGrupos] = useState([]);

    // https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/refs/heads/main/selecoes.json
    useEffect(() => {
        const buscarGrupos = async () => {
            const resposta = await fetch(
                "https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/refs/heads/main/selecoes.json"
            );
            const dados = await resposta.json();
            setGrupos(dados);
        };
        buscarGrupos();
    }, []);

    return (
        <section className="cards">
            {grupos.map((grupo) => (
                <section className={styles.card} key={grupo.grupo}>
                    <div
                        className={styles.card_bar}
                        style={{ backgroundColor: grupo.cor }}
                    ></div>
                    <h2>GRUPO {grupo.grupo}</h2>
                    <ul>
                        {grupo.selecoes.map((pais) => {
                            return (
                                <li key={pais.sigla}>
                                    <img
                                        src={`/bandeiras/${pais.imagem}.svg`}
                                        alt={pais.selecao}
                                    />
                                    <span>{pais.selecao}</span>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            ))}
        </section>
    );
};

export default Card;
