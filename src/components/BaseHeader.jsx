import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function BaseHeader() {

  const {t} = useTranslation()

  return (
    <header>
      <div className="header">
        <nav className="header__nav">
          <p className="nav-tag">
            <Link to="/">
            &lt; / ValeRon Kozlov &gt;
            </Link>
          </p>
          <ul className="nav-list">
            <li className="list-item">
              <Link to="/about">{t("main.nav.about me")}</Link>
            </li>
            <li className="list-item">
              <a href="#work">{t("main.nav.work")}</a>
            </li>
            <li className="list-item">
              <a href="#kontakt">{t("main.nav.kontakt")}</a>
            </li>
          </ul>
          <a
            href="https://github.com/ValeRonKozlov"
            aria-label="Github"
            target="balnk"
          >
            <img src="./icons/github.svg" alt="github"></img>
            Github
          </a>
        </nav>
      </div>
  </header>
  )
}
