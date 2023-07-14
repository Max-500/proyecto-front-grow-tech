import MainLayout from "../layouts/MainLayout";
import TitleHome from "../components/TitleHome";
import Table from "../components/Table";
import Temperature from "../components/Temperature"

import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Home = () => {

    const { id, username, password, email, token, newId, newUsername, newPassword, newToken } = useContext(UserContext)
    console.log(id);
     
    return (
        <>
            <MainLayout title={<TitleHome />} table={<Table />} temperatura={<Temperature />} />
        </>
    )
}

export default Home;