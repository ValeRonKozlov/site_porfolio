import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

import "./fonts/Roboto-Bold.woff"
import "./fonts/Roboto-Bold.woff2"
import "./fonts/Roboto-Regular.woff"
import "./fonts/Roboto-Regular.woff2"
import "./styles/App.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
