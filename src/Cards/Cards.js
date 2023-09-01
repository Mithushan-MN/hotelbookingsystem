import React from 'react'
import CardUI from './CardUI'
import './Cards.css'
import room_1 from '../Images/room-1.jpeg'
import room_2 from '../Images/room-4.jpeg'
import room_3 from '../Images/room-3.jpeg'

const Cards = () => {
  return (
    <div className='cards-contain'>
      <div>
        <CardUI imgsrc={room_1} title='Luxury Suite Room' price='$350' singlepage="/login"/>
      </div>
      <div>
        <CardUI imgsrc={room_2} title='Deluxe Room' price='$300' singlepage="/login"/>
      </div>
      <div>
        <CardUI imgsrc={room_3} title='Luxury Room' price='$250' singlepage="/login"/>
      </div>
    </div>
  )
}

export default Cards
