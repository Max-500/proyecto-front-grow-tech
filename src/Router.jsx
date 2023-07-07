import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login"
import Registro from "./pages/Registro";
import Home from "./pages/Home"
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
                element: <Home />,
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