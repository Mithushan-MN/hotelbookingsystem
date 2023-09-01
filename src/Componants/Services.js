import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer,} from "react-icons/fa";
import './Services.css'

export default class Services extends Component {

state={
    services:[
        {
            icon:<FaCocktail/>,
            title:"free Cocktails",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, deleniti?"
                        
        },
        {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, deleniti?"
                        
        },
        {
            icon:<FaBeer/>,
            title:"Strongest Beer",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, deleniti?"
                        
        },
        {
            icon:<FaShuttleVan/>,
            title:"free Cocktails",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, deleniti?"
                        
        },
    ]
}


  render() {
    return (
      <section id="services"className='services'>
        <Title title='services'/>
        <div className='services-center'>
            {this.state.services.map((item,index)=>{
                return(
                    <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                )
            })}
        </div>
      </section>
    )
  }
}
