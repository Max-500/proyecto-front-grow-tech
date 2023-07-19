import PlantRow from "../components/PlantRow";
import { useRef, useState, useEffect } from "react";

const Table = () => {

    const [plants, setPlants] = useState([])
    const [allPlants, setAllPlants] = useState([])
    const [nButton, setNButton] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const paginado = useRef(null);
    const previousButton = useRef(null);
    const nextButton = useRef(null);

    useEffect(() => {
        const arr = [
            {
                planta: "Manzana 1",
                humedad: "75°",
                estado: true
            }, {
                planta: "Manzana 2",
                humedad: "75°",
                estado: false
            }, {
                planta: "Manzana 3",
                humedad: "75°",
                estado: true
            }, {
                planta: "Manzana 4",
                humedad: "75°",
                estado: false
            }, {
                planta: "Manzana 5",
                humedad: "75°",
                estado: true
            }, {
                planta: "Manzana 6",
                humedad: "75°",
                estado: false
            }, {
                planta: "Manzana 7",
                humedad: "75°",
                estado: true
            }, {
                planta: "Manzana 8",
                humedad: "75°",
                estado: false
            }, {
                planta: "Manzana 9",
                humedad: "75°",
                estado: true
            }, {
                planta: "Manzana 10",
                humedad: "75°",
                estado: false
            },
        ]
        let nBotones = [];

        for (let i = 1; i <= Math.ceil(arr.length / 4); i++)
            nBotones.push(i)
        setNButton(nBotones)
        let buttons = Math.ceil(arr.length / 4);
        if (arr.length > 4) {
            paginado.current.style.setProperty("display", "flex")
            previousButton.current.style.setProperty("display", "none")
        }
        setPlants(arr.slice(0, 4))
        setAllPlants(arr)
    }, [])

    const handleClickNextPage = () => {
        let lastPage = Math.ceil(allPlants.length / 4);
        const nextPage = currentPage + 1;
        settingPlants(nextPage)
        validateButtons(nextPage, lastPage);
    }

    const handleClickPreviousPage = () => {
        let lastPage = Math.ceil(allPlants.length / 4);
        const nextPage = currentPage - 1;
        settingPlants(nextPage)
        validateButtons(nextPage, lastPage);
    }

    const handleClickButton = (e) => {
        let actualPage = parseInt(e.target.textContent);
        let lastPage = Math.ceil(allPlants.length / 4);
        validateButtons(actualPage, lastPage)
        settingPlants(actualPage)
    }

    const validateButtons = (actualPage, lastPage) => {
        if (actualPage !== 1) {
            previousButton.current.style.setProperty("display", "flex")
        } else {
            previousButton.current.style.setProperty("display", "none")
        }

        if (actualPage === lastPage) {
            nextButton.current.style.setProperty("display", "none")
        } else {
            nextButton.current.style.setProperty("display", "flex")
        }
    }

    const settingPlants = (actualPage) => {
        let plantas = allPlants;
        setPlants(plantas.slice(((actualPage * 4) - 4), (actualPage * 4)))
        setCurrentPage(actualPage)
    }

    return (
        <>
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
                            <PlantRow planta={plant.planta} humedad={plant.humedad} estado={plant.estado ? 'Optimo' : 'Critico' } />
                        ))}
                    </tbody>
                    <caption ref={paginado} className="tabla-botones">
                        <div className="contenedor-botones">
                            <button className="botones-paginado" ref={previousButton} onClick={handleClickPreviousPage}>Previous Page</button>
                        </div>
                        <div className="contenedor-botones-paginado">
                            {
                                nButton.map((n) =>
                                    <button className="botones-paginado" onClick={handleClickButton}>{n}</button>
                                )
                            }
                        </div>
                        <div className="contenedor-botones">
                            <button className="botones-paginado" ref={nextButton} onClick={handleClickNextPage}>Next Page</button>
                        </div>
                    </caption>
                </table>
            </div>
        </>
    )
}

export default Table;