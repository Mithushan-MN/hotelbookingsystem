import React from 'react'
import Hero from '../Componants/Hero'
import Banner from '../Componants/Banner'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <Hero hero="defaultHero">
      <Banner title='404' subtitle='page Not Found'>
        <Link to='/' className='btn-primary'>
        Return Home
        </Link>
      </Banner>
    </Hero>
  )
}

