import "../public/css/Login.css"
import SharedSection from "../components/SharedSection";
import SharedAside from "../components/SharedAside"
import Footer from "../components/Footer";
//
import Logo from "../assets/Logo.svg"
import Family from "../assets/Family.svg"
import NewAccount from "../components/NewAccount";

import "../public/css/SharedSection.css"

const Login = () => {

    return (
        <>
            <main className="main-shared">
                <SharedSection img1={Logo} img2={Family} />
                <SharedAside newAccount={<NewAccount />}>
                    <button className="button-form-shared" type="submit">Iniciar Sesion</button>
                </SharedAside>
            </main>
                <Footer />
        </>
    )
}

export default Login;