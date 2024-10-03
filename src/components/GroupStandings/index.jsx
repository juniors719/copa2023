import { useState, useEffect } from "react";
import styles from "./GroupStandings.module.css";

const GroupStandings = () => {
    const [grupos, setGrupos] = useState([]);
    const [selecoes, setSelecoes] = useState([]);
    const [grupoSelecionado, setGrupoSelecionado] = useState("A");

    useEffect(() => {
        const fetchGrupos = async () => {
            const response = await fetch(
                "https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/refs/heads/main/classificacao-por-grupos-2023.json"
            );
            const data = await response.json();
            setGrupos(data);
        };
        fetchGrupos();

        const fetchSelecoes = async () => {
            const response = await fetch(
                "https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/refs/heads/main/selecoes.json"
            );
            const grupos = await response.json();
            const todasSelecoes = grupos.flatMap((grupo) => grupo.selecoes);
            setSelecoes(todasSelecoes);
        };
        fetchSelecoes();
    }, []);

    const handleSelectChange = (event) => {
        setGrupoSelecionado(event.target.value);
    };

    return (
        <section className={styles.group_standings}>
            <div className={styles.div_select}>
                <select
                    name="select_grupo"
                    id="select_grupo"
                    onChange={handleSelectChange}
                >
                    <option value="A">Grupo A</option>
                    <option value="B">Grupo B</option>
                    <option value="C">Grupo C</option>
                    <option value="D">Grupo D</option>
                    <option value="E">Grupo E</option>
                    <option value="F">Grupo F</option>
                    <option value="G">Grupo G</option>
                    <option value="H">Grupo H</option>
                </select>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th className={styles.table_column_maior}>Seleção</th>
                        <th>Pts</th>
                        <th>V</th>
                        <th>E</th>
                        <th>D</th>
                        <th>GP</th>
                        <th>GC</th>
                        <th>SG</th>
                    </tr>
                </thead>
                <tbody>
                    {grupos
                        .filter((grupo) => grupo.grupo === grupoSelecionado)
                        .map((grupo) => {
                            const selecao = selecoes.find(
                                (selecao) =>
                                    selecao.selecao.toLowerCase() ===
                                    grupo.selecao.toLowerCase()
                            );
                            return (
                                <tr key={grupo.selecao}>
                                    <td
                                        className={styles.table_column_position}
                                    >
                                        {grupo.posicao}
                                    </td>
                                    <td className={styles.table_column_nome}>
                                        <span
                                            className={
                                                styles.table_column_selecao
                                            }
                                        >
                                            {selecao && (
                                                <img
                                                    src={
                                                        selecao.imagem
                                                            ? "/bandeiras/" +
                                                              selecao.imagem +
                                                              ".svg"
                                                            : "/bandeiras/default.svg"
                                                    }
                                                    alt={grupo.selecao}
                                                />
                                            )}
                                            <span
                                                className={styles.selecao_nome}
                                            >
                                                {selecao.selecao}
                                            </span>
                                            <span
                                                className={styles.selecao_sigla}
                                            >
                                                {selecao.imagem.toUpperCase()}
                                            </span>
                                        </span>
                                    </td>
                                    <td>{grupo.pontos}</td>
                                    <td>{grupo.vitorias}</td>
                                    <td>{grupo.empates}</td>
                                    <td>{grupo.derrotas}</td>
                                    <td>{grupo.gols_pro}</td>
                                    <td>{grupo.gols_contra}</td>
                                    <td>{grupo.saldo_gols}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </section>
    );
};

export default GroupStandings;
