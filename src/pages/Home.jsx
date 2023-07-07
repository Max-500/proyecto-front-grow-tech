import AsideHome from "../components/AsideHome";
import ButtonHome from "../components/ButtonHome";
import NavbarHome from "../components/NavbarHome";
import "../public/css/AsideHome.css"

const Home = () => {

    return (
        <>
            <main className="main-home">
                <AsideHome />
                <nav className="navbar-home-pattern">
                    <NavbarHome />
                    <p className="p-home">
                        Aqui iran las props
                        Lorem ipsum dolor sit amet consectetur adipiscing elit commodo, fringilla pharetra ante pretium convallis 
                        orci eu porta, nam habitasse quis nullam lacinia parturient sed. Mus tincidunt mattis molestie euismod egestas, 
                        nascetur dictumst vitae magna rhoncus nullam, turpis morbi eleifend nulla. Quisque aptent quam enim donec 
                        parturient nascetur primis varius, laoreet class dictumst penatibus metus massa potenti faucibus, eros iaculis 
                        venenatis netus cras praesent interdum.

                        Vitae suspendisse est pellentesque curae convallis tristique, habitasse suscipit himenaeos varius molestie, 
                        porta pulvinar ultricies magnis ac. Pretium semper bibendum elementum et sodales ut vivamus, ornare dis nulla 
                        duis senectus malesuada, morbi odio habitant orci erat faucibus. Vestibulum montes sociosqu primis eros gravida 
                        proin penatibus nullam, sem condimentum bibendum mattis semper ornare fermentum neque interdum, cum auctor 
                        habitant suspendisse nisl suscipit nam.
                    </p>
                    <ButtonHome />
                </nav>
            </main>
        </>
    );
}

export default Home;