import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import BaseNavigation from './BaseNavigation'
import BaseTranslateSwitch from './BaseTranslateSwitch'
import Sound from './Sound'
import { GitHub } from './GitHub'

import "../styles/Header.css"


function BaseHeader() {

  useEffect(() => {
    Aos.init({ duration: 3000 });
  })

  return (
    <header className='header'>
      <Link to="/" className="header-link item-link">
      &lt; / ValeRon Kozlov &gt;
      </Link>
      <BaseNavigation />
      <BaseTranslateSwitch />
      <Sound />
      <GitHub />
    </header>
  )
}

export { BaseHeader }
