import React from "react"
import { useTranslation } from "react-i18next"

function Works() {

    const {t} = useTranslation()

    return (
      <section className="works">
        <h2 className="works-title">
          {t("works.title")}
        </h2>
      </section>
    )
  }
export { Works }
