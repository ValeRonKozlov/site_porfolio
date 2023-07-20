import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"

import en from "./locales/en/translation.json"
import ru from "./locales/ru/translation.json"

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  debug: true,
  lang: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation:  en
    },
    ru: {
      translation:  ru
    }
  },
})

export default i18n
