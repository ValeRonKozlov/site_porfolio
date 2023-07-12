import React from 'react'
import AOS from 'aos'


export default function ScrollActiion() {
  AOS.init({ duration: 1200 });
  return (
      <div className="scroll">
        <div className="item" data-aos="example-anim1">HTML</div>
        <div className="item" data-aos="example-anim2">JS</div>
        <div className="item" data-aos="example-anim3">React</div>
        <div className="item" data-aos="example-anim1">Vue</div>
        <div className="item" data-aos="example-anim2">Node.js</div>
        <div className="item" data-aos="example-anim3">Css</div>
        <div className="item" data-aos="example-anim1">JavaScript</div>
        <div className="item" data-aos="example-anim2">HTML5</div>
        <div className="item" data-aos="example-anim3">Css3</div>
        <div className="item" data-aos="example-anim1">WebPack</div>
        <div className="item" data-aos="example-anim2">Jest</div>
        <div className="item" data-aos="example-anim3">Gulp</div>
      </div>
  )
}
