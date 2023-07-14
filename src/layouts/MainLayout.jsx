import { useContext, useEffect, useRef, useState } from "react";
import AsideApp from "../components/AsideApp";
import HeaderApp from "../components/HeaderApp"

import "../public/css/MainLayout.css"
import { AppContext } from "../contexts/AppContext";
import TitleHome from "../components/TitleHome";
import PlantRow from "../components/PlantRow";

const MainLayout = () => {

    const { newStateMenuBurger } = useContext(AppContext)

    const [plants, setPlants] = useState([])
    const [allPlants, setAllPlants] = useState([])
    const [nButton, setNButton] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const elemento = useRef(null)
    const container = useRef(null)
    const paginado = useRef(null)

    useEffect(() => {
        const arr = [
            {
                planta: "Manzana 1",
                humedad: "75°",
                estado: "Optimo"
            }, {
                planta: "Manzana 2",
                humedad: "75°",
                estado: "Critico"
            }, {
                planta: "Manzana 3",
                humedad: "75°",
                estado: "Optimo"
            }, {
                planta: "Manzana 4",
                humedad: "75°",
                estado: "Optimo"
            }, {
                planta: "Manzana 5",
                humedad: "75°",
                estado: "Optimo"
            },
        ]
        let nBotones = [];

        for (let i = 1; i <= Math.ceil(arr.length / 4); i++)
            nBotones.push(i)
        setNButton(nBotones)
        let buttons = Math.ceil(arr.length / 4);
        if (arr.length > 3) {
            paginado.current.style.setProperty("display", "flex")
        }
        setPlants(arr.slice(0, 4))
        setAllPlants(arr)
    }, [])

    const handleClickNextPage = () => {

    }

    const handleClickPreviousPage = () => {

    }

    const handleClickButton = (e) => {
        console.log(currentPage)
        let actualPage = parseInt(e.target.textContent);
        setCurrentPage(actualPage);
        let plantas = allPlants;
        console.log(plantas.slice(((actualPage * 4) - 4), (actualPage * 4)))
        setPlants(plantas.slice(((actualPage * 4) - 4), (actualPage * 4)))
    }

    const handleMouseLeave = () => {
        elemento.current.style.setProperty("transform", "translateX(100%)");
        elemento.current.style.setProperty("transition", "transform 0.5s ease-in-out");
        container.current.style.setProperty("opacity", "1")
        container.current.style.setProperty("transition", "opacity 0.3s")
        newStateMenuBurger(false)
    }

    return (
        <>
            <main className="main">
                <HeaderApp referenciaAside={elemento} referenciaDiv={container} />
                <div className="container">
                    <div className="child" ref={container}>
                        <TitleHome />
                        <div className="tabla-container">
                            <table className="tabla">
                                <thead className="tabla-header">
                                    <tr className="tr-header">
                                        <th className="tr-header-item">TIPO DE CULTIVO</th>
                                        <th className="tr-header-item">HUMEDAD</th>
                                        <th className="tr-header-item">ESTATUS</th>
                                    </tr>
                                </thead>
                                <tbody className="tabla-body">
                                    {plants.map((plant) => (
                                        <PlantRow planta={plant.planta} humedad={plant.humedad} estado={plant.estado} />
                                    ))}
                                </tbody>
                                <caption ref={paginado} className="tabla-botones">
                                    <div className="contenedor-botones">
                                        <button className="botones-paginado">Previous Page</button>
                                    </div>
                                    <div>
                                        {
                                            nButton.map((n) =>
                                                <button className="botones-paginado" onClick={handleClickButton}>{n}</button>
                                            )
                                        }
                                    </div>
                                    <div className="contenedor-botones">
                                        <button className="botones-paginado">Next Page</button>
                                    </div>
                                </caption>
                            </table>
                        </div>
                        <div className="temperatura-container">
                            hola soy el contenedor de la imagen
                        </div>
                    </div>
                    <aside className="child" ref={elemento} onMouseLeave={handleMouseLeave}>
                        <AsideApp />
                    </aside>
                </div>
            </main >
        </>
    )
}

export default MainLayout;