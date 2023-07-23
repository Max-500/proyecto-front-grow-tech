import { useContext, useState } from "react"
import "../public/css/Help.css"
import { UserContext } from "../contexts/UserContext"
import Cookies from "universal-cookie";
import axios from "../AxiosSetting/axios";
import { useNavigate } from "react-router-dom";

const Help = () => {

    const cookies = new Cookies();
    const navigate = useNavigate()

    const handleSendEmail = () => {
        const username = cookies.get('username')
        axios.post('/email-sender/', {
            username
        }).then((res) => {
            if (res.status === 200) {
                alert('¡Correo Enviado! La ayuda llegara pronto :)')
                navigate("/home")
                return;
            }
            alert('¡Error! Algo sucedio mal, intentalo mas tarde')
            return;
        }).catch((err) => {
            alert('¡Error! Algo sucedio mal, intentalo mas tarde')
            console.log(err)
            const cookies = new Cookies();
            cookies.remove('token')
        })
    }

    return (
        <>
            <div className="help-container">
                <p className="help-title">Si tienes problemas haznoslo saber :)</p>
                <div className="help-main">
                    <p className="help-text">Por favor danos una descripción del problema</p>
                    <div className="help-textarea">
                        <textarea className="textarea" id="" cols="30" rows="20"></textarea>
                        <button onClick={handleSendEmail} className="help-button">Enviar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Help;