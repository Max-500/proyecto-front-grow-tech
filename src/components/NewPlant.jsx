import { useState } from "react"
import "../public/css/NewPlant.css"
import Cookies from "universal-cookie"
import axios from "../AxiosSetting/axios"
import { useNavigate } from "react-router-dom"

const NewPlant = () => {

    const [plant, setPlant] = useState("")

    const cookies = new Cookies()
    const navigate = useNavigate()

    const handleChangePlant = (e) => {
        setPlant(e.target.value)
    }

    const handleNewPlant = () => {
        const nombre = plant
        const nombreU = cookies.get('username')
        const humedad = 0;
        const status = true;
        const usuario_id = cookies.get('user_id')
        console.log(cookies.get('token'))
        axios.post('/plants/create/', {
            nombre, nombreU, humedad, status, usuario_id
        }).then((res) => {
            if (res.status === 201) {
                alert("Tu nueva planta se acaba de crear, te ayudaremos a cuidarla :3")
                navigate("/home")
                return;
            }
            alert("Algo sucedio mal, intentalo mas tarde")
        }).catch((err) => {
            alert("Algo se rompio, intentalo mas tarde")
            const cookies = new Cookies();
            cookies.remove('token')
        })
    }

    return (
        <>
            <div className="new-plant-container">
                <input className="new-plant-text" type="text" placeholder="Ingresa el nombre de la planta a añadir" onChange={handleChangePlant} />
                <button className="new-plant-button" onClick={handleNewPlant}>Añadir</button>
            </div>
        </>
    )
}

export default NewPlant