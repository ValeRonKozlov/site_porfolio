import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


function NotFound() {

  const {t} = useTranslation()

  return (
    <div className="error-msg">
      <Link to="/site_portfolio">{t('error.msg')}</Link>
    </div>
  )
}

export { NotFound }
