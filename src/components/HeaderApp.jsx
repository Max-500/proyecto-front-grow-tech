import Logo from "../assets/Logo.svg"
import ImgPerfil from "../assets/Imagen Perfil.svg"
import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faChartLine, faBook, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"

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
                            <li><b>Pagina Principal</b></li>
                            <div className="div-img-perfil">
                                <img className="img-perfil" src={ImgPerfil} alt="Imagen De Perfil" />
                            </div>
                            <FontAwesomeIcon onClick={handleClick} className="icons" icon={faBars} color="#40A798" />
                        </ul>
                    </nav>
                </div>
            </header>
            <div className={`menu-hamburguesa-${isOpen}`}>
                        <li className="li-hamburguesa"><FontAwesomeIcon className="icons" icon={faHouse} color="#40A798" /><a className="a-hamburguesa" href="/home">Pagina Principal</a></li>
                        <li className="li-hamburguesa"><FontAwesomeIcon className="icons" icon={faChartLine} color="#40A798" /><a className="a-hamburguesa" href="#">Analisis de Datos</a></li>
                        <li className="li-hamburguesa"><div><FontAwesomeIcon className="icons" icon={faBook} color="#40A798" /></div><a className="a-hamburguesa-exception" href="#">Recomendaciones de Cuidado</a></li>
                        <li className="li-hamburguesa"><FontAwesomeIcon className="icons" icon={faPaperPlane} color="#40A798" /><a className="a-hamburguesa" href="#">Ayuda y Soporte</a></li>
            </div>
        </>
    )
}

export default HeaderApp;

/*
    {

        <div className="div-button-shared">
                    <button onClick={handleClick} className="button-aside-shared"><FontAwesomeIcon className="icons" icon={faBars} color="#40A798" /></button>
                </div>
                    isOpen ? (
                        <>
                            <nav className={`aside-nav-main-shared-${isOpen}`}>
                                <ul className="main-ul-shared">
                                    <li><FontAwesomeIcon className="icons" icon={faHouse} color="#40A798" /><a href="/home">Pagina Principal</a></li>
                                    <li><FontAwesomeIcon className="icons" icon={faChartLine} color="#40A798" /><a href="#">Analisis de Datos</a></li>
                                    <li><FontAwesomeIcon className="icons" icon={faBook} color="#40A798" /><a href="#">Recomendaciones<br />de Cuidado</a></li>
                                    <li><FontAwesomeIcon className="icons" icon={faPaperPlane} color="#40A798" /><a href="#">Ayuda y Soporte</a></li>
                                </ul>
                            </nav>
                        </>
                    ) : (
                        <>
                            
                        </>
                    )
                }
*/