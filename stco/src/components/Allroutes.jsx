import React from 'react'
import {Route, Routes} from "react-router-dom";
import About from '../pages/About';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import Orderconfirmation from '../pages/Orderconfirmation';
import Productdetails from '../pages/Productdetails';

const Allroutes = () => {
  return (
    <>
       <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/productdetails' element={<Productdetails/>} />
           <Route path='/checkout' element={<Checkout/>} />
           <Route path='/order' element={<Orderconfirmation/>} />
       </Routes>

    </>
  )
}

export default Allroutes