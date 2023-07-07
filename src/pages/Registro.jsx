import "../public/css/Registro.css"
import SharedSection from "../components/SharedSection";

import Logo from "../assets/Logo.svg"
import Family from "../assets/Family.svg"
import Footer from "../components/Footer";
import SharedAside from "../components/SharedAside";
import InputEmail from "../components/InputEmail";



const Registro = () => {
    return ( 
        <>
            <main className="main-shared">
                <SharedSection img1={Logo} img2={Family}/>
                <SharedAside inputEmail={<InputEmail />}>
                    <button className="button-form-shared" type="submit">Registrar</button>
                </SharedAside>
            </main>
                <Footer />
        </>
     );
}

export default Registro;