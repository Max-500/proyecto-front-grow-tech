import { useContext, useState } from "react"
import "../public/css/Help.css"
import { UserContext } from "../contexts/UserContext"
import Cookies from "universal-cookie";

const Help = () => {

    const { username } = useContext(UserContext)
    const cookies = new Cookies();

    const [message, setMessage] = useState("")

    const handleChangeMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleSendEmail = () => {
        console.log(cookies.get('username'))
        console.log(cookies.get('email'));
        console.log(cookies.get('token'));
        console.log(message)
    }

    return (
        <>
            <div className="help-container">
                <p className="help-title">Si tienes problemas haznoslo saber :)</p>
                <div className="help-main">
                    <p className="help-text">Por favor danos una descripción del problema</p>
                    <div className="help-textarea">
                        <textarea onChange={handleChangeMessage} className="textarea" id="" cols="30" rows="20"></textarea>
                        <button onClick={handleSendEmail} className="help-button">Enviar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Help;