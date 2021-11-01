import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Ora Travel Agency</h1>
                <p className="mt-4 ">
                Are you confussed about your tour ??? We are here to take your confussion & make you happy.
                </p>
                <div className="d-flex ">
                <div className="foter-phone-icon pe-4">
                <i class="fas fa-phone"></i>
                  </div>
                  <div>
                    <h5>+1 9 800 555 85 67</h5>
                  </div>
                </div>
                
                <div className="map d-flex ">
                  <div className="foter-phone-icon pe-4">
                  <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <p>
                    503 Old Buffalo Street Northwest #205, New York-3087. <br />
                    </p>
                  </div>
                </div>
                <p className="mt-5">
                  <small>Ora Travel Agency © . All rights reserved.</small>
                </p>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                  <i class="fab fa-instagram"></i>
                  </div>
                  <div className="icon">
                  <i class="fab fa-linkedin"></i>
                  </div>
                  <div className="icon">
                  <i class="fab fa-pinterest-square"></i>
                  </div>
                  <div className="icon">
                  <i class="fab fa-facebook-square"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
                <h3>Links</h3>
              <div className="footer-menu-container list-item-none">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Hotels</li>
                  <li className="footer-menu">Destinations</li>
                  <li className="footer-menu">About Us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">

               <div><img className="w-100" src="https://images.unsplash.com/photo-1529171696861-bac785a44828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dG91cnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" /></div>
                
            
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Footer;