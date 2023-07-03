import React from "react"
import { useTranslation } from "react-i18next"

function AboutMe() {

    const {t} = useTranslation()

    return (
      
      <section className="about">
        <h2 className="about-title">
          {t("about.title")}
        </h2>
      </section>
    )
  }
export { AboutMe }
