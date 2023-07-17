import "../public/css/NewPlant.css"

const NewPlant = () => {
    return (
        <>
            <div className="new-plant-container">
                <input className="new-plant-text" type="text" placeholder="Ingresa el nombre de la planta a añadir" />
                <button className="new-plant-button">Añadir</button>
            </div>
        </>
    )
}

export default NewPlant