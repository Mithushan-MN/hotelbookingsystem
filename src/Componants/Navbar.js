
import Logo from '../Images/2530103.png'
import {FaAlignRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'
import React, { Component } from 'react'


export default class Navbar extends Component {

state={
  isOpen:false
}
handleToggle=()=>{
  this.setState({isOpen:!this.state.isOpen})
}


  render() {
    return (
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <img src={Logo} alt='logo'/>
            </Link>
            <button type='button' className='nav-btn' onClick={this.handleToggle}>
              <FaAlignRight className='nav-icon'/>
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/rooms" >Rooms</Link>
            </li>
            <li>
              <Link to="services">Services</Link>
            </li>
              <div className='lfbtn'>
                {/* <li>
                <Link to="/login"><button className='lgbtn'>LogIn</button></Link>
                </li> */}
                <li>
                <Link to="/login"><button className='lgbtn'>SighnUp</button></Link>
                </li>
              </div>
          </ul>
          {/* <button>SighnIn</button> */}
        </div>
      </nav>
    )
  }
}

