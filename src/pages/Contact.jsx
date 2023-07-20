import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import mail from "../assets/icons/mail.svg"
import gh from "../assets/icons/github.svg"
import vk from "../assets/icons/vk.svg"
import tg from "../assets/icons/telegram.svg"

import Aos from "aos";

import "../styles/Contact.css"

function Contact() {

  const { t } = useTranslation()

  useEffect(() => {
    Aos.init()
  })

  return (
    <section className="contact" data-aos="zoom-in">
      <div className="contact-image">
        <img className="contact-image-img" src={mail} alt="contact" />
      </div>
      <div className="contact__content">
        <h2 className="contact-title">
          {t('contact.title')}
        </h2>
        <span className="line"></span>
        <p className="contact-descr">
          {t('contact.descr')}
        </p>
        <ul className="contact__list">
          <li className="contact-item">
            <a className="contact-link" href="https://github.com/ValeRonKozlov" target="_blank" rel="noopener noreferrer">
              <img className="contact-link-img" src={gh} alt="GitHub" />
            </a>
          </li>
          <li className="contact-item">
            <a className="contact-link" href="https://vk.com/valeronkozlov" target="_blank" rel="noopener noreferrer">
              <img className="contact-link-img" src={vk} alt="Vk" />
            </a>
          </li>
          <li className="contact-item">
            <a className="contact-link" href="https://t.me/ValeRonKozlov" target="_blank" rel="noopener noreferrer">
              <img className="contact-link-img" src={tg} alt="Telegram" />
            </a>
          </li>
        </ul>
        <a className="email-btn" href="mailto:frinkenton@gmail.com">Email</a>
      </div>
    </section>
  )
}

export { Contact }
