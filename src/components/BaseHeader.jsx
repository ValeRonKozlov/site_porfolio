import React, { useEffect} from 'react'
import Aos from 'aos'
import BaseNavigation from './BaseNavigation'
import BaseTranslateSwitch from './BaseTranslateSwitch'
import Sound from './Sound'
import { GitHub } from './GitHub'

import "../styles/Header.css"


export default function BaseHeader() {

  useEffect(() => {
    Aos.init({ duration: 3000 });
  })

  return (
    <header className='header' data-aos="flip-up">
      <BaseNavigation />
      <BaseTranslateSwitch />
      <Sound />
      <GitHub />
    </header>
  )
}
