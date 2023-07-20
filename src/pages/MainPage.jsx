import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import TechnologyStack from "../components/TechnologyStack"

import "../styles/MainPage.css"
import { useEffect, useState } from "react"

function MainPage() {

  const { t } = useTranslation()

  const [scrollTop, setScrollTop] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 200) {
        setScrollTop(true)
      } else {
        setScrollTop(false)
      }
    });
  }, [])

  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <section className="main">
      <div className="hero-section">
        <div className="hero-left-content">
          <h1 className="hero-title">{t("hero.header")}</h1>
          <p className="hero-descr">{t("hero.descr")}</p>
            <Link className="hero-btn" to="/works">{t("hero.btn")}</Link>
        </div>
        <div className="hero-image-wrapper">
          <img className="hero-image" src="./img/main.svg" alt="main" />
        </div>
      </div>
      {/* <TechnologyStack/> */}
      {scrollTop && (
        <div className="backbclock">
          <img src="./icons/arrowup.png" alt="arrowup" />
          <button className="backtotop" onClick={bottomToTop}>
            {t("hero.backtotop")}
          </button>
        </div>
      )}
    </section>
  )
}

export { MainPage }
