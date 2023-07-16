import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Aos from "aos";

import "../styles/Contact.css"

function Contact() {

  const {t} = useTranslation()

  useEffect(()=> {
    Aos.init()
  })

  return (
    <section className="contact">
      <h2 className="contact-title">
        {t('contact.title')}
      </h2>
      <ul className="contact__list">
        <li className="contact__list-item" data-aos="fade-right">
          <a href="mailto:frinkenton@gmail.com" className="mail-link contact-link">
            <img className="contact-img" src="./img/maillogo.svg" alt="mail" />
          </a>
        </li>
        <li className="contact__list-item" data-aos="fade-down">
          <a href="https://vk.com/valeronkozlov" className="vk-link contact-link" target="blank">
            <img className="contact-img" src="./img/vklogo.svg" alt="vk" />
          </a>
        </li>
        <li className="contact__list-item" data-aos="fade-up">
          <a href="https://t.me/ValeRonKozlov" className="telegram-link contact-link" target="blank">
            <img className="contact-img" src="./img/telegalogo.png" alt="telegram" />
          </a>
        </li>
        <li className="contact__list-item" data-aos="fade-left">
          <a href="tel:+79107711716" className="phone-link contact-link">
            <img className="contact-img" src="./img/phone.jpg" alt="phone" />
          </a>
        </li>
      </ul>
    </section>
  )
}

export { Contact }
