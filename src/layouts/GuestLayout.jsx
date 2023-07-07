import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const GuestLayout = () => {

    const { token } = useContext(UserContext);

    if(token){
        return <Navigate to= "/" />
    }

    return (
        <>
            <Outlet />
        </>
    )
}

export default GuestLayout;