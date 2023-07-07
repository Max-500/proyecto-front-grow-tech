import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const DefaultLayout = () => {
   
    const { token } = useContext(UserContext);

    if(!token){
        return <Navigate to= "/login" />
    }
    
    return (
        <>
            <Outlet />
        </>
    )
}

export default DefaultLayout;