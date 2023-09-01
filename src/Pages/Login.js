import React, { useState } from 'react'
import { database } from '../Componants/Configs/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import '../App.css'
import Swal from 'sweetalert2'
// import {Limg} from '../images/36194.png'

const RegisterAndLogin = () => {

    const [login, setLogin] = useState(false)

    const history = useNavigate()

    const handleSubmit = (e,type)=>{
        e.preventDefault()
        const email = e.target.email.value 
        const password = e.target.password.value

        if(type === 'signup'){
        createUserWithEmailAndPassword(database,email,password).then(data=>{
            console.log(data,"authData")
            // alert('successfully registered')
            Swal.fire({
              title: 'Success!',
              text: `successfully registered`,
              icon: 'success',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK',
            });
            setLogin(true)
            // history('/')
           
        }).catch(err=>{
            alert(err.code)
            setLogin(true)
        })

    }else{
        signInWithEmailAndPassword(database,email,password).then(data=>{
            console.log(data,"authData")
            history('/rooms')
        }).catch(err=>{
            alert(err.code)
        })
    }
    }

  return (
    <div className='maindiv'>
        <div className='leftdiv'>
        <div className='row'>
            <div className={login === false?'activeColor':'pointer'} onClick={()=>setLogin(false)}>SignUp</div>
            <div className={login === true?'activeColor':'pointer'} onClick={()=>setLogin(true)}>SignIn</div>
        </div>
        <h1>{login?'SignIn':'SignUp'}</h1>
      <form onSubmit={(e)=>handleSubmit(e,login?'signin':'signup')}>
        
        <input className='input-area' name='email' placeholder='Email'/><br/>
        <input className='input-area' name='password' type='password' placeholder='Password'/><br/><br/> 
        <button className='login-btn'>{login?'SignIn':'SignUp'}</button>
      </form>
      </div>

      <div className='rightdiv'>
        {/* <img src={Limg} /> */}
        {/* <img src="C:/Users/Mithushan/Desktop/Bluechip/firebase/reactlogin/src/images/36194.png" alt="Description" /> */}
        
      </div>
    </div>
  )
}

export default RegisterAndLogin
