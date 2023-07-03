import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { Works } from "./Works"
import { Contact } from "./Contact"

function MainPage() {

  const { t } = useTranslation()

  return (
    <div className="main">
      <section className="main-section">
        <h1 className="main-title">{t("main.header")}</h1>
        <p className="main-descr">{t("main.descr")}</p>
        <button className="main-btn">
          <Link to="/works">{t("main.btn")}</Link>
        </button>
        <div className="main-image"></div>
      </section>
      <Works />
      <Contact />
    </div>
  )
}

export { MainPage }
