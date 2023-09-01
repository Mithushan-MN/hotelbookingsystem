import React from 'react'
import logo from '../Images/2530103.png'
import './Footer.css'
import { FaFacebook,FaInstagram,FaWhatsappSquare} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='foo-left'>
        <img src={logo}/>
      </div>
      <div className='foo-center'>
        <p>@Mithushan Creations</p>
      </div>
      <div className='foo-right'>

      <FaFacebook className='fticons'/>
      <FaInstagram className='fticons'/>
      <FaWhatsappSquare className='fticons'/>
      </div>
    </div>
  )
}

export default Footer
