import fon from "../music/fon.mp3"
import { useTranslation } from "react-i18next"

import "../styles/Sound.css"

function Sound() {
  // music sound
  const sound = new Audio(fon)
  function play() {
    sound.play()
  }
  function pause() {
    sound.pause()
  }
  // Text translate
  const { t } = useTranslation()

  return (
    <div className="sound">
      <p className="sound-title">{t('music.title')}</p>
      <button className="sound-btn" onClick={() => play()}>{t('music.play')}</button>
      <button className="sound-btn" onClick={() => pause()}>{t('music.stop')}</button>
    </div>
  )
}

export default Sound
