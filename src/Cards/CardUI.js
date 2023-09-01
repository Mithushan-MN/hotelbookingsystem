import React from 'react'
import './CardUI.css'
import { Link } from 'react-router-dom'


const CardUI = (props) => {
  return (
    <div className='card-container'>
      <div className='overflow'>
        <img src={props.imgsrc} alt='cdimg' className='contain-top'/>
      </div>

      <div className='card-body'>
        <h4 className='cart-title'>{props.title}</h4>
        <p className='cart-price'>{props.price}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <Link to={props.singlepage}>
        <button className='btn-primary'>Book Now</button>
        </Link>
      </div>
    </div>
    
  )
}

export default CardUI
