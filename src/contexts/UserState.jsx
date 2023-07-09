import { useState } from "react";
import { UserContext } from "./UserContext";

// eslint-disable-next-line react/prop-types
const UserState = ({ children }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")

    const newName = (value) => {
        setName(value);
    }

    const newEmail = (value) => {
        setEmail(value)
    }

    const newPassword = (value) => {
        setPassword(value)
    }

    const newToken = (value) => {
        setToken(value)
    }

    return (
        <>
            <UserContext.Provider value={{
                name, email, password, token, newName, newEmail, newPassword, newToken
            }}>
                { children }
            </UserContext.Provider>
        </>
    )

}

export default UserState;