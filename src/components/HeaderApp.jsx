import Logo from "../assets/Logo.svg"
import ImgPerfil from "../assets/Imagen Perfil.svg"

const HeaderApp = () => {
    return (
        <>
            <header className="header-shared">
                <div className="div-img-logo-shared">
                    <img className="img-logo-shared" src={Logo} alt="Logo Grow Tech" />
                </div>
                <div className="div-nav-shared">
                    <nav className="header-nav-shared">
                        <ul className="header-ul-shared">
                            <li><b>Pagina Principal</b></li>
                            <div className="div-img-perfil">
                                <img className="img-perfil" src={ImgPerfil} alt="Imagen De Perfil" />
                            </div>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default HeaderApp;