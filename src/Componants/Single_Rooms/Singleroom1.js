import React, { useEffect, useState } from 'react'
import room1 from '../../Images/room-1.jpeg'
import Hero from '../Hero'
import Banner from '../Banner'
import { Link } from 'react-router-dom'
import './Singleroom.css'
import { FaBath, FaCoffee, FaParking, FaWifi} from "react-icons/fa";
import { CgGym } from 'react-icons/cg';
import { BiRestaurant } from 'react-icons/bi';

import { db } from '../Configs/Firebase'
import { collection, getDocs,addDoc } from 'firebase/firestore'
import Swal from 'sweetalert2';

const Singleroom1 = (price) => {
    
    const [bookingList,setBookingList] = useState([]);

    //Now Booking states
    const [newBookingStartDate,setNewBookingStartDate] = useState(0);
    const [newBookingEndDate,setNewBookingEndDate] = useState(0);
    const [newBookingPets,setNewBookingPets] = useState([]);
    const [newBookingPrice,setNewBookingPrice] = useState([]);

    const BookingCollectionRef = collection(db,"Bookings")

    // useEffect(()=> {
    //     const getBookingList = async()=> {

    //         try{
    //             const data = await getDocs(BookingCollectionRef);
    //             console.log(data);
    //         }catch (err){
    //             console.error(err);
    //         }
    //     };
    //     getBookingList();
    // }, []); 

    const onsubmitBooking = async()=>{
        try{
            await addDoc(BookingCollectionRef,{
                startDate: newBookingStartDate,
                endDate: newBookingEndDate,
                pets: newBookingPets,
                price: newBookingPrice
            })
            Swal.fire({
                title: 'Success!',
                text: `Room has been successfully created.`,
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
              });
        } catch (err){
            console.error(err);
        }
    }


  return (
    <>
    <Hero hero="roomsHero">
        <Banner title='Luxury Suite Room Details'>
            <Link to='/rooms' className='btn-primary'>
                Back to Rooms 
            </Link>
        </Banner>
    </Hero>
    <div className='main_contain'>
      <div className='left_contain'>
        <h3>Luxury Suite Room</h3>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Placeat, officiis optio.<br/> Esse eveniet sint quis.</p>
        <img src={room1} alt=''/>
        <h3>Room Facilities</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Placeat, officiis optio.<br/> Esse eveniet sint quis.</p>
        <div className='facilities'>
            <div className='faci-items'>
                <FaWifi/>
                <h5>Free Wifi</h5>
            </div>
            <div className='faci-items'>
                <FaCoffee/>
                <h5>Coffee</h5>
            </div>
            <div className='faci-items'>
                <FaBath/>
                <h5>Bath</h5>
            </div>
        </div>
        <div className='facilities'>
            <div className='faci-items'>
                <FaParking/>
                <h5>Parking</h5>
            </div>
            <div className='faci-items'>
                <BiRestaurant/>
                <h5>BreakFast</h5>
            </div>
            <div className='faci-items'>
                 <CgGym/>
                <h5>Free Wifi</h5>
            </div>
        </div>
      </div>
      <div className='riht_contain'>
        <h4>Your Reservation</h4>
        <div className='inputitems'>
            <input type='date' placeholder='check in'  className='input' onChange={(e) => setNewBookingStartDate(e.target.value)}/>
            <input type='date' placeholder='check in'className='input' onChange={(e) => setNewBookingEndDate(e.target.value)}/>
           
            <select name="pet" id="pet" placeholder='check in' className='input' onChange={(e) => setNewBookingPets(e.target.value)}>
                
                <option >Yes</option>
                <option >No</option>
            </select>           
            <select name="price" id="price" className='input' onChange={(e) => setNewBookingPrice(e.target.value)}>
                <option >Select price</option>
                <option >$350</option>
            </select>

            <button className='btn-primary' onClick={onsubmitBooking}>Book Now</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Singleroom1
