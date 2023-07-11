import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faChartLine, faBook, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const AsideApp = () => {

    return (
        <>
            <div className='div-aside-shared'>
                <aside className="aside-shared">
                    <nav className="aside-nav-main-shared">
                        <ul className="main-ul-shared">
                            <li><FontAwesomeIcon className="icons" icon={faHouse} color="#40A798" /><a href="/home">Pagina Principal</a></li>
                            <li><FontAwesomeIcon className="icons" icon={faChartLine} color="#40A798" /><a href="#">Analisis de Datos</a></li>
                            <li><FontAwesomeIcon className="icons" icon={faBook} color="#40A798" /><a href="#">Recomendaciones</a></li>
                            <li><FontAwesomeIcon className="icons" icon={faPaperPlane} color="#40A798" /><a href="#">Ayuda y Soporte</a></li>
                        </ul>
                    </nav>
                </aside>
            </div>
        </>
    )
}

export default AsideApp;