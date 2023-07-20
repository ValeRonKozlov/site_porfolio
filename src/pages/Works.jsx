import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import Aos from "aos"

import "../styles/Works.css"
import { GitHub } from "../components/GitHub"


import hpass from "../assets/img/hightpasslink.jpg"
import lagoona from "../assets/img/lagoonalink.jpg"
import evklid from "../assets/img/evklidlink.jpg"
import thz from "../assets/img/thzlink.jpg"

function Works() {

    const {t} = useTranslation()

    useEffect(()=> {
      Aos.init()
    })

    return (
      <section className="works">
        <ul className="works__list">
          <li className="works__list-item" data-aos="zoom-in">
            <a href="https://valeronkozlov.github.io/site_HPass/" className="works__list-item-link" target="blank">
              <img className="works__list-item-link-img" src={hpass} alt="HightPass" />
            </a>
          </li>
          <li className="works__list-item" data-aos="zoom-out">
            <a href="https://valeronkozlov.github.io/site_Lagoona/" className="works__list-item-link" target="blank">
              <img className="works__list-item-link-img" src={lagoona} alt="Lagoona" />
            </a>
          </li>
          <li className="works__list-item" data-aos="fade-right">
            <a href="https://valeronkozlov.github.io/site_Evklid/" className="works__list-item-link" target="blank">
              <img className="works__list-item-link-img" src={evklid} alt="Evklid" />
            </a>
          </li>
          <li className="works__list-item" data-aos="fade-left">
            <a href="https://valeronkozlov.github.io/vue_thz/#/" className="works__list-item-link" target="blank">
              <img className="works__list-item-link-img" src={thz} alt="Thz" />
            </a>
          </li>
        </ul>
        <p className="works-descr">{t("works.descr")} <GitHub/></p>
      </section>
    )
  }
export { Works }
