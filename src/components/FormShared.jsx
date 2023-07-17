// eslint-disable-next-line react/prop-types
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import axios from "../AxiosSetting/axios.js"
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

// eslint-disable-next-line react/prop-types
const FormShared = ({ newAccount, inputEmail, boton }) => {

    const { id, username, password, email, token, newId, newUsername, newPassword, newToken } = useContext(UserContext)

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        // eslint-disable-next-line react/prop-types
        let evento = boton.props.title;
        localStorage.setItem('username', username);
        if(evento === "Registrar"){
            axios.post('/register/',{
                username,
                email,
                password
            }).then((res) => {
                if(res.status === 201){
                    alert("Se ha creado la cuenta");
                    navigate("/login");
                }
            }).catch((err) => {
                console.log(err)
            })
            return;
        }
        axios.post("/login/", {
            username, 
            password
        }).then((res) => {
            console.log(res)
            if(res.status === 200){
                const cookies = new Cookies();
                cookies.set('token', res.data.token, { path: '/' })
                cookies.set('email', res.data.user.email, { path: '/' })
                cookies.set('username', res.data.user.username, { path: '/' })
                newToken(JSON.stringify(res.data.token))
                return;
            }
            alert("No se pudo loggear, intentalo mas tarde")
        })
    }

    const handleChangeName = (e) => {
        newUsername(e.target.value);
    }

    const handleChangePassword = (e) => {
        newPassword(e.target.value);
    }
    
    return (
        <>
            <form className="form-shared" onSubmit={handleSubmit}>
                <h1>Grow Tech</h1>

                <div>
                    <label className="label-form-shared" htmlFor="">
                        <h4 className="h4-form-shared">Usuario</h4>
                    </label>
                </div>
                <input className="input-form-shared" type="text" placeholder="Ingresa tu nombre de usuario" onChange={handleChangeName} />
                <br />

                {inputEmail}

                <div>
                    <label className="label-form-shared" htmlFor="">
                        <h4 className="h4-form-shared">Contraseña</h4>
                    </label>
                </div>
                <input className="input-form-shared" type="password" placeholder="Ingresa tu contraseña" onChange={handleChangePassword} />
                <br />

                {newAccount}

                {boton}
            </form>
        </>
    )
}

export default FormShared;