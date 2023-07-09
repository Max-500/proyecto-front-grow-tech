import { useNavigate } from "react-router-dom";

const ButtonHome = () => {

    const navigate = useNavigate();

    const handleRedirectHome = () => {
        navigate("/home")
    }

    return (
        <>
            <button className="button-principal" onClick={handleRedirectHome}>Get Started</button>
        </>
    )
}

export default ButtonHome;