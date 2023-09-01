import React from 'react'
import './Hero.css'

export default function Hero({children,hero}) {
  return (
    <header className={hero}>
      {children}
    </header>
  )
}
