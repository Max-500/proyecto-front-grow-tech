import Logo from "../assets/Logo.svg"
import ImgPerfil from "../assets/Imagen Perfil.svg"
import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faChartLine, faBook, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const HeaderApp = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (e) => {
        console.log(isOpen)
        e.preventDefault();
        if (isOpen === false) {
            setIsOpen(true)
            return;
        }
        setIsOpen(false)
    }

    return (
        <>
            <header className="header-shared">
                <div className="div-img-logo-shared">
                    <img className="img-logo-shared" src={Logo} alt="Logo Grow Tech" />
                </div>
                <div className="div-nav-shared">
                    <nav className="header-nav-shared">
                        <ul className="header-ul-shared">
                            <div className="div-img-perfil">
                                <img className="img-perfil" src={ImgPerfil} alt="Imagen De Perfil" />
                            </div>
                            <div className="div-img-button">
                                <FontAwesomeIcon onClick={handleClick} className="icons-exception" icon={faBars} color="#40A798" />
              
                            </div>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className={`menu-hamburguesa-${isOpen}`}>
                <li className="li-hamburguesa"><FontAwesomeIcon className="icons" icon={faHouse} color="#40A798" /><a className="a-hamburguesa" href="/home">Pagina Principal</a></li>
                <li className="li-hamburguesa"><FontAwesomeIcon className="icons" icon={faChartLine} color="#40A798" /><a className="a-hamburguesa" href="#">Analisis de Datos</a></li>
                <li className="li-hamburguesa"><div><FontAwesomeIcon className="icons" icon={faBook} color="#40A798" /></div><a className="a-hamburguesa-exception" href="#">Recomendaciones</a></li>
                <li className="li-hamburguesa"><FontAwesomeIcon className="icons" icon={faPaperPlane} color="#40A798" /><a className="a-hamburguesa" href="#">Ayuda y Soporte</a></li>
            </div>
        </>
    )
}

export default HeaderApp;