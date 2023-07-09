import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login"
import Registro from "./pages/Registro";
import Principal from "./pages/Principal"
import NotFound from "./pages/NotFound";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Principal />,
            },
            {
                path: "/home",
                element: <p>Aqui ira el home</p>
            }
        ]
    }, 
    {
        path: "/",
        element: <GuestLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/registro",
                element: <Registro />
            }
        ]
    },
])