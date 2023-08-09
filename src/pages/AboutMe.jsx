import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"

import photo from "../assets/img/photo.jpg"
import cven from "../assets/cvv/ValeRonKozlovCvvEN.pdf"
import cvru from "../assets/cvv/ValeRonKozlovCvvRU.pdf"

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
          <div className="download">
            <a href={cven} rel="noreferrer" class="download-cv" target="_blank">
              <svg stroke="#000" fill="#E8E6E1" stroke-width="0" viewBox="0 0 512 512" class="cv-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4zm-92 160H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32z"></path><path d="M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z"></path></svg>
              <span class="download-span">{t("about.view.en")}</span>
            </a>
            <a href={cvru} rel="noreferrer" class="download-cv" target="_blank">
              <svg stroke="currentColor" fill="#E8E6E1" stroke-width="0" viewBox="0 0 512 512" class="cv-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4zm-92 160H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32z"></path><path d="M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z"></path></svg>
              <span class="download-span">{t("about.view.ru")}</span>
            </a>
          </div>
        </div>
      </section>
    )
  }
export { AboutMe }
