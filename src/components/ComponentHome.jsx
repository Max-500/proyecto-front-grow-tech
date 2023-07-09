import { useState } from "react";

const ComponentHome = () => {

    const home = <p className="p-principal">Lorem ipsum DE HOME dolor sit amet consectetur adipiscing elit commodo, fringilla pharetra ante pretium convallis
        orci eu porta, nam habitasse quis nullam lacinia parturient sed. Mus tincidunt mattis molestie euismod egestas,
        nascetur dictumst vitae magna rhoncus nullam, turpis morbi eleifend nulla. Quisque aptent quam enim donec
        parturient nascetur primis varius, laoreet class dictumst penatibus metus massa potenti faucibus, eros iaculis
        venenatis netus cras praesent interdum.

        Vitae suspendisse est pellentesque curae convallis tristique, habitasse suscipit himenaeos varius molestie,
        porta pulvinar ultricies magnis ac. Pretium semper bibendum elementum et sodales ut vivamus, ornare dis nulla
        duis senectus malesuada, morbi odio habitant orci erat faucibus. Vestibulum montes sociosqu primis eros gravida
        proin penatibus nullam, sem condimentum bibendum mattis semper ornare fermentum neque interdum, cum auctor
        habitant suspendisse nisl suscipit nam.</p>

    const aboutUs = <p className="p-principal">Lorem ipsum DE ABOUT US dolor sit amet consectetur adipiscing elit commodo, fringilla pharetra ante pretium convallis
        orci eu porta, nam habitasse quis nullam lacinia parturient sed. Mus tincidunt mattis molestie euismod egestas,
        nascetur dictumst vitae magna rhoncus nullam, turpis morbi eleifend nulla. Quisque aptent quam enim donec
        parturient nascetur primis varius, laoreet class dictumst penatibus metus massa potenti faucibus, eros iaculis
        venenatis netus cras praesent interdum.

        Vitae suspendisse est pellentesque curae convallis tristique, habitasse suscipit himenaeos varius molestie,
        porta pulvinar ultricies magnis ac. Pretium semper bibendum elementum et sodales ut vivamus, ornare dis nulla
        duis senectus malesuada, morbi odio habitant orci erat faucibus. Vestibulum montes sociosqu primis eros gravida
        proin penatibus nullam, sem condimentum bibendum mattis semper ornare fermentum neque interdum, cum auctor
        habitant suspendisse nisl suscipit nam.</p>

    const contactUs = <p className="p-principal">Lorem ipsum DE CONTACT US dolor sit amet consectetur adipiscing elit commodo, fringilla pharetra ante pretium convallis
        orci eu porta, nam habitasse quis nullam lacinia parturient sed. Mus tincidunt mattis molestie euismod egestas,
        nascetur dictumst vitae magna rhoncus nullam, turpis morbi eleifend nulla. Quisque aptent quam enim donec
        parturient nascetur primis varius, laoreet class dictumst penatibus metus massa potenti faucibus, eros iaculis
        venenatis netus cras praesent interdum.

        Vitae suspendisse est pellentesque curae convallis tristique, habitasse suscipit himenaeos varius molestie,
        porta pulvinar ultricies magnis ac. Pretium semper bibendum elementum et sodales ut vivamus, ornare dis nulla
        duis senectus malesuada, morbi odio habitant orci erat faucibus. Vestibulum montes sociosqu primis eros gravida
        proin penatibus nullam, sem condimentum bibendum mattis semper ornare fermentum neque interdum, cum auctor
        habitant suspendisse nisl suscipit nam.</p>

    const [linkText, setLinkText] = useState(home)

    const handleLinkClickHome = (e) => {
        e.preventDefault();
        setLinkText(home)
    }

    const handleLinkClickAboutUs = (e) => {
        e.preventDefault();
        setLinkText(aboutUs)
    }

    const handleLinkClickContactUs = (e) => {
        e.preventDefault();
        setLinkText(contactUs)
    }

    return (
        <>
            <ul className="navbar-principal">
                <li className="li-principal"><a onClick={handleLinkClickHome} className="a-principal">Grow Tech</a></li>
                <li className="li-principal"><a onClick={handleLinkClickAboutUs} className="a-principal">Sobre Nosotros</a></li>
                <li className="li-principal"><a onClick={handleLinkClickContactUs} className="a-principal">Contáctenos</a></li>
            </ul>
                {linkText}
        </>
    )
}

export default ComponentHome;