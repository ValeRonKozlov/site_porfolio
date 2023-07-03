import React from 'react'
import BaseNavigation from './BaseNavigation'
import BaseTranslateSwitch from './BaseTranslateSwitch'
import Sound from './Sound'
import { GitHub } from './GitHub'

import "../styles/Header.css"


export default function BaseHeader() {

  return (
    <header className='header'>
      <BaseNavigation />
      <BaseTranslateSwitch />
      <Sound />
      <GitHub />
    </header>
  )
}
