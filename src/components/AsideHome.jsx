import Logo from "../assets/Logo.svg"
import SeñoraPlantando from "../assets/Señora-Plantando.svg"

const AsideHome = () => {
    return (
        <>
            <aside className="aside-home">
                    <figure className="figure-home">
                        <img className="img-logo-home" src={Logo} alt="Logo Growtech" />
                        <img className="img-señora-home" src={SeñoraPlantando} alt="Señora Plantando" />
                    </figure>
                </aside>
        </>
    )
}

export default AsideHome;