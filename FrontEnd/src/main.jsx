import React from "react"
import ReactDom from "react-dom/client"
import './index.css'
import Home from './pages/Home.jsx'
import Error from "./pages/Error.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/register.jsx"
import Pets from "./pages/pets.jsx"
import Dogs from "./pages/Dogs.jsx"
import Cats from "./pages/Cats.jsx"
import Book from "./pages/Book.jsx"
import Complete from "./pages/Complete.jsx"
import Bookings from "./pages/Bookings.jsx"
import { createBrowserRouter,RouterProvider } from "react-router-dom"


const router=createBrowserRouter([
  {
    path:"/",
    element:<Home />,
    errorElement:<Error />,
  },{
    path:"/login",
    element:<Login />,
    errorElement:<Error />,
  },{
    path:"/register",
    element:<Register />,
    errorElement:<Error />
  },{
    path:"/pets",
    element:<Pets />,
    errorElement:<Error />
  },{
    path:"/dogs",
    element:<Dogs />,
    errorElement:<Error />
  },{
    path:"/cats",
    element:<Cats />,
    errorElement:<Error />
  },{
    path:"/book",
    element:<Book />,
    errorElement:<Error />
  },{
    path:"/complete",
    element:<Complete />,
    errorElement:<Error />
  },{
    path:"/bookings",
    element:<Bookings />,
    errorElement:<Error />
  }
])

const app=ReactDom.createRoot(document.getElementById("root"));
app.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

