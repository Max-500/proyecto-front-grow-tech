import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faChartLine, faBook, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const AsideApp = () => {

    return (
        <>
            <nav className="nav-child" >
                <ul className="nav-ul">
                    <li className="nav-li"><FontAwesomeIcon className="icons" icon={faHouse} color="#476268" /><a className="nav-a" href="/home">Pagina Principal</a></li>
                    <li className="nav-li"><FontAwesomeIcon className="icons" icon={faChartLine} color="#476268" /><a className="nav-a" href="#">Analisis de Datos</a></li>
                    <li className="nav-li"><FontAwesomeIcon className="icons" icon={faBook} color="#476268" /><a href="#">Recomendaciones</a></li>
                    <li className="nav-li"><FontAwesomeIcon className="icons" icon={faPaperPlane} color="#476268" /><a href="#">Ayuda y Soporte</a></li>
                </ul>
            </nav>
        </>
    )
}

export default AsideApp;