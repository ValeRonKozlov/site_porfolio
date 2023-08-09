import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import BaseNavigation from './BaseNavigation'
import BaseTranslateSwitch from './BaseTranslateSwitch'
import { GitHub } from './GitHub'

import "../styles/Header.css"


function BaseHeader() {

  useEffect(() => {
    Aos.init({ duration: 3000 });
  })

  return (
    <header className='header'>
      <Link to="/site_portfolio" className="header-link item-link">
      &lt; / ValeRon Kozlov &gt;
      </Link>
      <BaseNavigation />
      <BaseTranslateSwitch />
      <GitHub />
    </header>
  )
}

export { BaseHeader }
