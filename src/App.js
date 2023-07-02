import { Routes, Route } from "react-router-dom";
import { Suspense } from "react"



import { MainPage }  from "./pages/MainPage"
import { AboutMe } from "./pages/AboutMe"
import { NotFound } from "./pages/NotFound";
import BaseHeader from "./components/BaseHeader";

function App() {
  return (
    <div className="App">
      <BaseHeader/>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/about" element={<AboutMe />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
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
