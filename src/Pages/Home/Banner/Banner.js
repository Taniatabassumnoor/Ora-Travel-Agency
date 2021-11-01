import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Banner.css';
const Banner = () => {
    const {user} = useAuth();
    return (
        <div>
           <div className="home-banner">
            <h1 className="hero ">TRAVEL <br /> <span className="text-white">Book Flight,<br /> Hotels and Holyday Packages </span></h1>
            <p className="hero-p">Best Great Tourism is Right Here,</p>
           
            
        {user?.email && <button  className="booking-btn"><Link to="/placeorder">Book Now</Link></button>}
        {!user?.email && <Link to="/login"><button  className="booking-btn">Book Now</button></Link>}
            </div> 
        </div>
    );
};

export default Banner;