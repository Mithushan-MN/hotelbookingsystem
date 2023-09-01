import React from 'react'
import Hero from '../Componants/Hero'
import Banner from '../Componants/Banner'
import { Link } from 'react-router-dom'
import CardUI from '../Cards/CardUI'
import room_3 from '../Images/room-3.jpeg'
import room_2 from '../Images/room-4.jpeg'
import room_1 from '../Images/room-1.jpeg'
import room_4 from '../Images/room-2.jpeg'
import room_5 from '../Images/room-5.jpeg'
import room_6 from '../Images/room-6.jpeg'
import room_7 from '../Images/room-7.jpeg'
import room_8 from '../Images/room-8.jpeg'
import room_9 from '../Images/room-9.jpeg'
import './Room.css'



const Room = () => {
  return (
    <div className='roomdiv'>
    <Hero hero="roomsHero">
      <Banner title='Our Rooms'>
        <Link to='/' className='btn-primary'>
        Return Home
        </Link>
      </Banner>
    </Hero>
    <div className='room-contain'> 
      <div>
        <CardUI imgsrc={room_1} title='Luxury Suite Room' price='$350' singlepage="/rooms/singleroom1"/>
      </div>
      <div>
        <CardUI imgsrc={room_2} title='Deluxe Room' price='$300' singlepage="/rooms/singleroom2"/>
      </div>
      <div>
        <CardUI imgsrc={room_3} title='Luxury Room' price='$250'singlepage="/rooms/singleroom3"/>
      </div>
    </div>
    <div className='room-contain'>
      <div>
        <CardUI imgsrc={room_4} title='Luxury Suite Room' price='$250' singlepage="/rooms/singleroom4"/>
      </div>
      <div>
        <CardUI imgsrc={room_5} title='Deluxe Room' price='$200'singlepage="/rooms/singleroom5"/>
      </div>
      <div>
        <CardUI imgsrc={room_6} title='Luxury Room' price='$200'singlepage="/rooms/singleroom6"/>
      </div>
    </div>
    <div className='room-contain'>
      <div>
        <CardUI imgsrc={room_7} title='Luxury Suite Room' price='$150'singlepage="/rooms/singleroom7"/>
      </div>
      <div>
        <CardUI imgsrc={room_8} title='Deluxe Room' price='$100'singlepage="/rooms/singleroom8"/>
      </div>
      <div>
        <CardUI imgsrc={room_9} title='Luxury Room' price='$100'singlepage="/rooms/singleroom9"/>
      </div>
    </div>
    </div>
  )
}

export default Room
