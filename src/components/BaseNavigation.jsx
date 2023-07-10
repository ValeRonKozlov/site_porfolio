import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../styles/Navigation.css"


function BaseNavigation() {

  const { t } = useTranslation()

  return (
    <nav className="header__nav">
      <p className="nav-tag">
        <Link to="/" className="item-link tag-link">
        &lt; / ValeRon Kozlov &gt;
        </Link>
      </p>
      <ul className="nav-list">
        <li className="list-item">
          <Link className="item-link" to="/about">{t("hero.nav.about me")}</Link>
        </li>
        <li className="list-item">
          <Link className="item-link" to="/works">{t("hero.nav.work")}</Link>
        </li>
        <li className="list-item">
          <Link className="item-link" to="/kontakt">{t("hero.nav.kontakt")}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default BaseNavigation
