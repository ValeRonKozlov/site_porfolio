import { useTranslation } from "react-i18next"
import i18n from "../i18n"


function MainPage() {
  // language translate
  const locales = {
    en: { title: "en", src: "./icons/un.png" },
    ru: { title: "ru", src: "./icons/ru.png" },
  }

  const { t } = useTranslation()

  return (
    <div className="container">
      <ul>
        {Object.keys(locales).map(locale => (
          <li key={locale}>
            <button type="submit" onClick={() => i18n.changeLanguage(locale)}>
              <img src={locales[locale].src} alt={locales[locale].title} />
            </button>
          </li>
        ))}
      </ul>
      <section className="main">
        <h1 className="main-title">{t("main.header")}</h1>
        <p className="main-descr">{t("main.descr")}</p>
        <button className="main-btn">{t("main.btn")}</button>
        <div className="main-image"></div>
      </section>
      <section className="work" id="work"></section>
      <section className="contakt" id="contakt"></section>
    </div>
  )
}

export { MainPage }
