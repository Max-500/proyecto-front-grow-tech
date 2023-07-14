import { useContext, useRef } from "react";
import AsideApp from "../components/AsideApp";
import HeaderApp from "../components/HeaderApp"

import "../public/css/MainLayout.css"
import { AppContext } from "../contexts/AppContext";

const MainLayout = ({ title, table, temperatura }) => {

    const { newStateMenuBurger } = useContext(AppContext)
    console.log(title);
    console.log(table)
    console.log(temperatura)
    const elemento = useRef(null)
    const container = useRef(null)

    const handleMouseLeave = () => {
        elemento.current.style.setProperty("transform", "translateX(100%)");
        elemento.current.style.setProperty("transition", "transform 0.5s ease-in-out");
        container.current.style.setProperty("opacity", "1")
        container.current.style.setProperty("transition", "opacity 0.3s")
        newStateMenuBurger(false)
    }

    return (
        <>
            <main className="main">
                <HeaderApp referenciaAside={elemento} referenciaDiv={container} />
                <div className="container">
                    <div className="child" ref={container}>
                        { title }
                        { table }
                        { temperatura }
                    </div>
                    <aside className="child" ref={elemento} onMouseLeave={handleMouseLeave}>
                        <AsideApp />
                    </aside>
                </div>
            </main >
        </>
    )
}

export default MainLayout;