import React from "react"
import ReactDOM from "react-dom/client"
import { ChakraProvider } from "@chakra-ui/react"
import { RouterProvider } from "react-router-dom"
import Router from "../utils/Router"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={Router} />
    </ChakraProvider>
  </React.StrictMode>
)
