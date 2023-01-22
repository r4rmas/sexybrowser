// import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Home from "../src/screens/Home"
import Plans from "../src/screens/Plans"
import Downloading from "../src/screens/Downloading"

const Router = createBrowserRouter([
  {
    path: "/",
    element: Home(),
  },
  {
    path: "/planes",
    element: Plans(),
  },
  {
    path: "/descargando",
    element: Downloading(),
  },
])

export default Router
