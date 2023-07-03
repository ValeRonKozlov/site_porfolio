import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../styles/navigation.css"


function BaseNavigation() {

  const { t } = useTranslation()

  return (
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
          <Link to="/works">{t("main.nav.work")}</Link>
        </li>
        <li className="list-item">
          <Link to="/kontakt">{t("main.nav.kontakt")}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default BaseNavigation
