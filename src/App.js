import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './Componants/Navbar'
import Home from './Pages/Home'
import Room from './Pages/Room'
import Single_Room from './Pages/Single_Room'
import Error from './Pages/Error'
import Footer from './Componants/Footer';
import Login from './Pages/Login';

import Singleroom1 from './Componants/Single_Rooms/Singleroom1';
import Singleroom2 from './Componants/Single_Rooms/Singleroom2';
import Singleroom3 from './Componants/Single_Rooms/Singleroom3';
import Singleroom4 from './Componants/Single_Rooms/Singleroom4';
import Singleroom5 from './Componants/Single_Rooms/Singleroom5';
import Singleroom6 from './Componants/Single_Rooms/Singleroom6';
import Singleroom7 from './Componants/Single_Rooms/Singleroom7';
import Singleroom8 from './Componants/Single_Rooms/Singleroom8';
import Singleroom9 from './Componants/Single_Rooms/Singleroom9';


function App() {
  return (
    <>
      
      <BrowserRouter>
        <Navbar/>
        
        <Routes>

          <Route path='/' Component={Home}/>
          <Route path='/rooms' Component={Room}/>
          <Route path='/rooms/:slug' Component={Single_Room}/>
          <Route path='*' Component={Error}/>
          <Route path='/login' Component={Login}/>



          <Route path='/rooms/singleroom1' Component={Singleroom1}/>
          <Route path='/rooms/singleroom2' Component={Singleroom2}/>
          <Route path='/rooms/singleroom3' Component={Singleroom3}/>
          <Route path='/rooms/singleroom4' Component={Singleroom4}/>
          <Route path='/rooms/singleroom5' Component={Singleroom5}/>
          <Route path='/rooms/singleroom6' Component={Singleroom6}/>
          <Route path='/rooms/singleroom7' Component={Singleroom7}/>
          <Route path='/rooms/singleroom8' Component={Singleroom8}/>
          <Route path='/rooms/singleroom9' Component={Singleroom9}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
