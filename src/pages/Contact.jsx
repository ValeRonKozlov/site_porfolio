import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {

  const {t} = useTranslation()

  return (
    <section className="contact">
      <h2 className="contact-title">
        {t('contact.title')}
      </h2>
    </section>
  )
}

export { Contact }
