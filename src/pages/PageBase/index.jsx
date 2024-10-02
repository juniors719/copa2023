import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

const PageBase = () => {
    return (
        <main>
            <Header />
            <NavBar />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    );
};

export default PageBase;
