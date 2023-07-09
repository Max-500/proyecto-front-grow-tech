import AsideHome from "../components/AsideHome";
import ButtonHome from "../components/ButtonHome";
import ComponentHome from "../components/ComponentHome";
import "../public/css/AsideHome.css"

const Home = () => {

    return (
        <>
            <main className="main-home">
                <AsideHome />
                <nav className="navbar-home-pattern">
                    <ComponentHome />
                    <ButtonHome />
                </nav>
            </main>
        </>
    );
}

export default Home;