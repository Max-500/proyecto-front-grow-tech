import "../public/css/Footer.css"
import LogoFacebook from "../assets/Facebook.svg"
import LogoTwitter from "../assets/Twitter.svg"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div>
                    <p className="p-footer">Siguenos en</p>
                    <div>
                        <a href="https://www.youtube.com/watch?v=ISbSJa1E3Us">
                            <img className="img-footer" src={LogoFacebook} alt="Facebook" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=ISbSJa1E3Us">
                            <img className="img-footer" src={LogoTwitter} alt="Twitter" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;