import React, { Component } from 'react'
import { RoomContext } from '../context'
import Room from './Room'
import Loading from './Loading';
import Title from './Title'
import './FeaturedRooms.css'

import Cards from '../Cards/Cards';

export default class FeaturedRooms extends Component {
    static contextType= RoomContext;
  render() {
    let {loading, FeaturedRooms: rooms} = 
    this.context;
    // rooms = rooms.map(room => {
    //     return <Room key={room.id} room={room} />
    // })

    return (
      <section className='featured-rooms'>
        <Title title="featured Rooms"/>
        <div className='featured-rooms-center'>
            {loading ? <Loading/>: rooms}
        </div>
        {/* <Room/> */}
        <Cards/>
      </section>
    )
  }
}
