import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPlus, faChartLine, faBook, faPaperPlane, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const AsideApp = () => {

    const { newToken } = useContext(UserContext);

    const logout = () => {
        localStorage.removeItem('authToken');
        newToken("");
    }

    return (
        <>
            <nav className="nav-child" >
                <ul className="nav-ul">
                    <li className="nav-li"><FontAwesomeIcon className="icons" icon={faHouse} color="#476268" /><a className="nav-a" href="/home">Pagina Principal</a></li>
                    <li className="nav-li"><FontAwesomeIcon className="icons" icon={faPlus} color="#466268" /><a href="#">Nueva Planta</a></li>
                    <li className="nav-li"><FontAwesomeIcon className="icons" icon={faChartLine} color="#476268" /><a className="nav-a" href="/analysis">Analisis de Datos</a></li>
                    <li className="nav-li"><FontAwesomeIcon className="icons" icon={faBook} color="#476268" /><a href="/recomendations">Recomendaciones</a></li>
                    <li className="nav-li"><FontAwesomeIcon className="icons" icon={faPaperPlane} color="#476268" /><a href="/help">Ayuda y Soporte</a></li>
                    <li className="nav-li"><FontAwesomeIcon className="icons" icon={faArrowRightFromBracket} color="#476268" /><a href="/login" onClick={logout}>Cerrar Sesión</a></li>
                </ul>
            </nav>
        </>
    )
}

export default AsideApp;