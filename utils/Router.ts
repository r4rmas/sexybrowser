import { createBrowserRouter } from "react-router-dom"
import Home from "../src/screens/Home"
import Plans from "../src/screens/Plans"
import Download from "../src/screens/Download"
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
    element: Download(),
  },
])

export default Router
