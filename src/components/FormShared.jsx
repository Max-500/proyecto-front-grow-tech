// eslint-disable-next-line react/prop-types
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";


// eslint-disable-next-line react/prop-types
const FormShared = ({ newAccount, inputEmail, boton }) => {

    const { name, password, email, newName, newPassword } = useContext(UserContext)

    const handleSubmit = async(e) => {
        e.preventDefault();
        // eslint-disable-next-line react/prop-types
        let evento = boton.props.children;
        console.log(evento)
        if(evento === "Registrar"){
            console.log("Estoy en la pagina de registro")
            console.log(name);
            console.log(email);
            console.log(password);
            return;
        }

        console.log("Estoy en la pagina de login");
        console.log(name);
        console.log(password);

    }

    const handleChangeName = (e) => {
        newName(e.target.value);
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
