import { useState, useEffect } from "react";
import styles from "./GameTable.module.css";

const GameTable = () => {
    const [jogos, setJogos] = useState([]);

    useEffect(() => {
        const fetchJogos = async () => {
            const response = await fetch(
                "https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/refs/heads/main/tabela-copa-feminina-2023.json"
            );
            const data = await response.json();
            setJogos(data);
        };
        fetchJogos();
    }, []);

    return (
        <section className={styles.game_table}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Horário</th>
                        <th>Grupo</th>
                        <th colSpan={7}>Jogo</th>
                    </tr>
                </thead>
                <tbody>
                    {jogos.map((jogo) => {
                        return (
                            <tr key={jogo.jogo}>
                                <td className={styles.table_column_data}>
                                    {jogo.data}
                                </td>
                                <td className={styles.table_column_hora}>
                                    {jogo.hora}
                                </td>
                                <td className={styles.table_column_grupo}>
                                    {jogo.grupo}
                                </td>
                                <td>
                                    <span
                                        className={styles.table_column_mandante}
                                    >
                                        <span className={styles.selecao_sigla}>
                                            {jogo.sigla_mandante}
                                        </span>
                                        <span className={styles.selecao_nome}>
                                            {jogo.mandante}
                                        </span>
                                        <img
                                            src={
                                                "/bandeiras/" +
                                                jogo.sigla_mandante.toLowerCase() +
                                                ".svg"
                                            }
                                            alt={jogo.mandante}
                                        />
                                    </span>
                                </td>
                                <td className={styles.table_column_gols}>
                                    {jogo.gols_mandante}
                                </td>
                                <td className={styles.table_column_x}>x</td>
                                <td className={styles.table_column_gols}>
                                    {jogo.gols_visitante}
                                </td>
                                <td>
                                    <span
                                        className={
                                            styles.table_column_visitante
                                        }
                                    >
                                        <img
                                            src={
                                                "/bandeiras/" +
                                                jogo.sigla_visitante.toLowerCase() +
                                                ".svg"
                                            }
                                            alt={jogo.visitante}
                                        />
                                        <span className={styles.selecao_nome}>
                                            {jogo.visitante}
                                        </span>
                                        <span className={styles.selecao_sigla}>
                                            {jogo.sigla_visitante}
                                        </span>
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
    );
};

export default GameTable;
