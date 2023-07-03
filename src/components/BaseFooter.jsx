import React from "react"
import { useTranslation } from "react-i18next"

import "../styles/Footer.css"

export function BaseFooter() {

  const { t } = useTranslation()

  return (
    <footer className="footer">
        <p className="footer-descr">{t('footer.descr')}</p>
    </footer>
  )
}
