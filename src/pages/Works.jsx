import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import Aos from "aos"

import "../styles/Works.css"
import { GitHub } from "../components/GitHub"

function Works() {

    const {t} = useTranslation()

    useEffect(()=> {
      Aos.init()
    })

    return (
      <section className="works">
        <h2 className="works-title">
          {t("works.title")}
        </h2>
        <ul className="works__list">
          <li className="works__list-item" data-aos="zoom-in">
            <a href="https://valeronkozlov.github.io/site_HPass/" className="works__list-item-link" target="blank">
              <img className="works__list-item-link-img" src="./img/hightpasslink.jpg" alt="HightPass" />
            </a>
          </li>
          <li className="works__list-item" data-aos="zoom-out">
            <a href="https://valeronkozlov.github.io/site_Lagoona/" className="works__list-item-link">
              <img className="works__list-item-link-img" src="./img/lagoonalink.jpg" alt="Lagoona" />
            </a>
          </li>
          <li className="works__list-item" data-aos="fade-right">
            <a href="https://valeronkozlov.github.io/site_Evklid/" className="works__list-item-link">
              <img className="works__list-item-link-img" src="./img/evklidlink.jpg" alt="Evklid" />
            </a>
          </li>
          <li className="works__list-item" data-aos="fade-left">
            <a href="https://valeronkozlov.github.io/vue_thz/#/" className="works__list-item-link">
              <img className="works__list-item-link-img" src="./img/thzlink.jpg" alt="Thz" />
            </a>
          </li>
        </ul>
        <p className="works-descr">{t("works.descr")} <GitHub/></p>
      </section>
    )
  }
export { Works }
