import AsideApp from "../components/AsideApp";
import HeaderApp from "../components/HeaderApp"

import "../public/css/MainLayout.css"

const MainLayout = () => {
    return (
        <>
            <div className="div-pattern-shared">
                <HeaderApp />
                <div className="div-aside-main-shared">
                    <AsideApp />
                    <main className="main-shared">
                        
                    </main>
                </div>
            </div>
        </>
    )
}

export default MainLayout;