import React from 'react'
import Hero from '../Componants/Hero'
import Banner from '../Componants/Banner'
import { Link } from 'react-router-dom'
import Services from '../Componants/Services'
import FeaturedRooms from '../Componants/FeaturedRooms'


export default function Home() {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner title='Discover the Best Hotel rooms' subtitle='Book now and get the best prices'>
          <Link to="/login" className='btn-primary'>
          Our Hotels
          </Link>

        </Banner>
      </Hero>
      <FeaturedRooms/>
      <Services/>
    
    </>
  )
}
