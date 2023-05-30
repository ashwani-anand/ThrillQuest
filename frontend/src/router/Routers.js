import React from "react"; 
import {Routes,Route} from 'react-router-dom'

import Home from './../pages/Home'
import Tours from './../pages/Tours'
import TourDetails from './../pages/TourDetails'
import Login from './../pages/Login'
import ThankYou from './../pages/ThankYou';
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tour" element={<Tours />} />
            <Route path="/tours/:id" element={<TourDetails />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tours/search" element={<SearchResultList />} />
        </Routes>
    )
};
export default Routers;  