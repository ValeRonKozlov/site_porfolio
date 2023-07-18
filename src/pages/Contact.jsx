import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

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
        <img className="contact-image-img" src="./icons/mail.svg" alt="contact" />
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
              <img className="contact-link-img" src="./icons/github.svg" alt="GitHub" />
            </a>
          </li>
          <li className="contact-item">
            <a className="contact-link" href="https://vk.com/valeronkozlov" target="_blank" rel="noopener noreferrer">
              <img className="contact-link-img" src="./icons/vk.svg" alt="Vk" />
            </a>
          </li>
          <li className="contact-item">
            <a className="contact-link" href="https://t.me/ValeRonKozlov" target="_blank" rel="noopener noreferrer">
              <img className="contact-link-img" src="./icons/telegram.svg" alt="Telegram" />
            </a>
          </li>
        </ul>
        <a className="email-btn" href="mailto:frinkenton@gmail.com">Email</a>
      </div>
    </section>
  )
}

export { Contact }
