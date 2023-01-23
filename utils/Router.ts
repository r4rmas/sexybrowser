import { createBrowserRouter } from "react-router-dom"
import Home from "../src/screens/Home"
import Plans from "../src/screens/Plans"
import Downloading from "../src/screens/Downloading"
import SuscriptionForm from "../src/screens/SuscriptionForm"

const Router = createBrowserRouter([
  {
    path: "/",
    element: Home(),
  },
  {
    path: "/plans",
    element: Plans(),
  },
  {
    path: "/suscription",
    element: SuscriptionForm()
  },
  {
    path: "/download",
    element: Downloading(),
  },
])

export default Router
