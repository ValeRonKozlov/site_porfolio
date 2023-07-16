import React, { useEffect } from 'react'
import AOS from 'aos'
import '../styles/Aos.css'


export default function ScrollActiion() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  })
  return (
      <div className="scroll">
        <div className="item red" data-aos="fade-up" data-aos-anchor-placement="center-center">
          <img className="item-image" src="./img/htmllogo.svg" alt="html" />
        </div>
        <div className="item" data-aos="fade-down" data-aos-anchor-placement="center-center">
          <img className="item-image" src="./img/csslogo.svg" alt="css" />
        </div>
        <div className="item green" data-aos="fade-right" data-aos-anchor-placement="center-center">
          <img className="item-image" src="./img/javascriptlogo.svg" alt="JavaScript" />
        </div>
        <div className="item yellow" data-aos="fade-left" data-aos-anchor-placement="center-center">
          <img className="item-image" src="./img/nodejslogo.svg" alt="nodeJs" />
        </div>
        <div className="item blue" data-aos="flip-left" data-aos-anchor-placement="center-center">
          <img className="item-image" src="./img/reactjslogo.svg" alt="ReactJs" />
        </div>
        <div className="item brown" data-aos="zoom-in" data-aos-anchor-placement="center-center">
          <img className="item-image" src="./img/jestlogo.png" alt="Jest" />
        </div>
        <div className="item red" data-aos="zoom-out" data-aos-anchor-placement="center-center">
          <img className="item-image" src="./img/webpacklogo.svg" alt="webpack" />
        </div>
        <div className="item green" data-aos="fade-right" data-aos-anchor-placement="center-center">
          <img className="item-image" src="./icons/github.svg" alt="github" />
        </div>
        <div className="item blue" data-aos="fade-left" data-aos-anchor-placement="center-center">
          <img className="item-image" src="./img/gulplogo.svg" alt="Gulp" />
        </div>
        <div className="item brown" data-aos="flip-left" data-aos-anchor-placement="center-center">
          <img className="item-image" src="./img/sasslogo.png" alt="Sass" />
        </div>
        <div className="item yellow" data-aos="flip-right" data-aos-anchor-placement="center-center">
          <img className="item-image" src="./img/figmalogo.png" alt="Figma" />
        </div>
      </div>
  )
}
