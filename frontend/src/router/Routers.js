import React from "react"; 
import {Routes,Route} from 'react-router-dom'

import Home from './../pages/Home'
import About from './../pages/About'
import Tours from './../pages/Tours'
import TourDetails from './../pages/TourDetails'
import Login from './../pages/Login'
import ThankYou from './../pages/ThankYou';
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import Payment from './../pages/payment'
import Thanks from './../pages/subscribethanks'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/about" element={<About  />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tour" element={<Tours />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/subscribethanks" element={<Thanks />} />
            <Route path="/tours/search" element={<SearchResultList />} />
        </Routes>
    )
};
export default Routers;  