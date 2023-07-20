import React from "react";
import i18n from "../i18n"

import "../styles/Translate.css"

import en from "../assets/icons/un.png"
import ru from "../assets/icons/ru.png"


function BaseTranslateSwitch() {

    // language translate
    const locales = {
      en: { title: "en", src: en },
      ru: { title: "ru", src: ru },
    }


  return (
    <ul className="translate__list">
      {Object.keys(locales).map(locale => (
        <li className="translate__list-item" key={locale}>
          <button className="translalte__list-item-btn" type="submit" onClick={() => i18n.changeLanguage(locale)}>
            <img className="translate__list-item-img" src={locales[locale].src} alt={locales[locale].title} />
          </button>
        </li>
      ))}
      </ul>
  )
}

export default BaseTranslateSwitch
