import { Routes, Route } from "react-router-dom";
import { Suspense } from "react"

import ParticlesBackground from "./components/ParticlesBackground";

import { BaseHeader } from "./components/BaseHeader";
import { MainPage }  from "./pages/MainPage"
import { AboutMe } from "./pages/AboutMe"
import { Works } from "./pages/Works";
import { Contact } from "./pages/Contact";
import { BaseFooter } from "./components/BaseFooter";
import { NotFound } from "./pages/NotFound";

import 'aos/dist/aos.css'
import Preloader from "./components/Preloader";

function App() {
  return (
    <div className="app">
      <ParticlesBackground/>
      <div className="container">
        <BaseHeader />
          <Routes>
            <Route path="/site_portfolio" element={<MainPage />}/>
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
    <Suspense fallback={<Preloader/>}>
      <App />
    </Suspense>
  )
}
