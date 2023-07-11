import { Routes, Route } from "react-router-dom";
import { Suspense } from "react"


import ParticlesBackground from "./components/ParticlesBackground";

import { MainPage }  from "./pages/MainPage"
import { AboutMe } from "./pages/AboutMe"
import { Works } from "./pages/Works";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import BaseHeader from "./components/BaseHeader";
import { BaseFooter } from "./components/BaseFooter";

function App() {
  return (
    <div className="App">
    <ParticlesBackground/>
      <div className="container">
        <BaseHeader/>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/about" element={<AboutMe />}/>
          <Route path="/works" element={<Works />}/>
          <Route path="/kontakt" element={<Contact />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <BaseFooter />
      </div>
    </div>
  )
}
export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  )
}
