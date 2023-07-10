import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { Works } from "./Works"
import { Contact } from "./Contact"

import "../styles/MainPage.css"

function MainPage() {

  const { t } = useTranslation()

  return (
    <div className="main">
      <section className="hero-section">
        <div className="hero-left-content">
          <h1 className="hero-title">{t("hero.header")}</h1>
          <p className="hero-descr">{t("hero.descr")}</p>
          <button className="hero-btn">
            <Link to="/works">{t("hero.btn")}</Link>
          </button>
        </div>
        <div className="hero-image-wrapper">
          <img src="./img/main.svg" alt="main" />
        </div>
      </section>
      <Works />
      <Contact />
    </div>
  )
}

export { MainPage }
