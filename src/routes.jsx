import { BrowserRouter, Route, Routes } from "react-router-dom";

import Card from "./components/Card";
import GameTable from "./components/GameTable";
import GroupStandings from "./components/GroupStandings";
import KnockoutStage from "./components/KnockoutStage";
import PageBase from "./pages/PageBase";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageBase />}>
                    <Route index element={<Card />} />
                    <Route path="/fase-de-grupos" element={<GameTable />} />
                    <Route
                        path="/classificacao-por-grupo"
                        element={<GroupStandings />}
                    />
                    <Route
                        path="/oitavas-de-final"
                        element={<KnockoutStage fase="oitavas" />}
                    />
                    <Route
                        path="/quartas-de-final"
                        element={<KnockoutStage fase="quartas" />}
                    />
                    <Route
                        path="/semifinal"
                        element={<KnockoutStage fase="semifinais" />}
                    />
                    <Route
                        path="/final"
                        element={<KnockoutStage fase="finais" />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
