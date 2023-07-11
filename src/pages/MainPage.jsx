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

            <Link className="hero-btn" to="/works">{t("hero.btn")}</Link>

        </div>
        <div className="hero-image-wrapper">
          <img className="hero-image" src="./img/main.svg" alt="main" />
        </div>
      </section>
      <Works />
      <Contact />
    </div>
  )
}

export { MainPage }
