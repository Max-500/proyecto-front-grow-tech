import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from "./Router.jsx"

import "./public/css/Main.css"
import UserState from './contexts/UserState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserState>
      <RouterProvider router={router}/>
    </UserState>
  </React.StrictMode>
)
