import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

import "./fonts/YsabeauOffice-ExtraBoldItalic.woff"
import "./fonts/YsabeauOffice-ExtraBoldItalic.woff2"
import "./fonts/YsabeauOffice-Italic.woff"
import "./fonts/YsabeauOffice-Italic.woff2"
import "./styles/App.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
