import React from "react"
import { useTranslation } from "react-i18next"

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "../styles/Works.css"
import { GitHub } from "../components/GitHub"


import hpass from "../assets/img/hightpasslink.jpg"
import lagoona from "../assets/img/lagoonalink.jpg"
import evklid from "../assets/img/evklidlink.jpg"
import thz from "../assets/img/thzlink.jpg"

function Works() {

    const {t} = useTranslation()

    return (
      <section className="works">
            <Swiper className="swiper"
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2}
              spaceBetween={0}
              loop={false}
              pagination={{
                clickable: true,
              }}
              coverflowEffect={{
                rotate: 40,
                stretch: 10,
                depth: 100,
                modifier: 2,
                slideShadows: false,
              }}
              modules={[EffectCoverflow, Pagination]}
            >
              <SwiperSlide>
                <a href="https://valeronkozlov.github.io/site_HPass/" className="works__list-item-link" target="blank">
                  <img className="works__list-item-link-img" src={hpass} alt="HightPass" />
                </a></SwiperSlide>
              <SwiperSlide>
                <a href="https://valeronkozlov.github.io/site_Lagoona/" className="works__list-item-link" target="blank">
                  <img className="works__list-item-link-img" src={lagoona} alt="Lagoona" />
                </a></SwiperSlide>
              <SwiperSlide>
                <a href="https://valeronkozlov.github.io/site_Evklid/" className="works__list-item-link" target="blank">
                  <img className="works__list-item-link-img" src={evklid} alt="Evklid" />
                </a></SwiperSlide>
              <SwiperSlide>
                <a href="https://valeronkozlov.github.io/vue_thz/#/" className="works__list-item-link" target="blank">
                  <img className="works__list-item-link-img" src={thz} alt="Thz" />
                </a></SwiperSlide>
            </Swiper>

        <p className="works-descr">{t("works.descr")} <GitHub/></p>
      </section>
    )
  }
export { Works }
