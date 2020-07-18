import React, { useState, useEffect } from 'react'
import { isEmpty } from './utils'
import Moon from '../icons/moon.svg'
import Sun from '../icons/sun.svg'

const Icon = ({ isDark, className }) =>
  isDark ? <Sun className={className}></Sun> : <Moon className={className}></Moon>

const ThemeSwitcher = ({ className }) => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const preference = localStorage.getItem('hpj-theme')
  const isDarkPreferred = !isEmpty(preference) ? preference === 'dark' : mediaQuery.matches

  const [isDark, setDark] = useState(isDarkPreferred)

  useEffect(() => {
    let theme = isDark ? 'dark' : 'light'

    localStorage.setItem('hpj-theme', theme)
    document.querySelector('body').setAttribute('data-theme', theme)

    const handler = ({ matches }) => setDark(matches)

    mediaQuery.addListener(handler)
    return () => mediaQuery.removeListener(handler)
  }, [isDark])

  return (
    <div onClick={() => setDark(!isDark)} className={`mt-1 ${className}`}>
      <Icon isDark={isDark} className="w-5 h-5"></Icon>
    </div>
  )
}

export default ThemeSwitcher
