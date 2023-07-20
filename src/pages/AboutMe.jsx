import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"

import photo from "../assets/img/photo.jpg"

import "../styles/About.css"
import Aos from "aos"

function AboutMe() {

    const {t} = useTranslation()

    useEffect(() => {
      Aos.init()
    })

    return (
      <section className="about">
        <div className="image-wrapper" data-aos="fade-left" data-aos-duration="3000">
          <img className="about-photo" src={photo} alt="myphoto" />
        </div>
        <div className="about-content" data-aos="fade-left" data-aos-duration="3000">
          <h2 className="about-title">
            {t("about.title")}
          </h2>
          <span className="line"></span>
          <p className="about-descr">
            {t("about.descr")}
          </p>
        </div>
      </section>
    )
  }
export { AboutMe }
