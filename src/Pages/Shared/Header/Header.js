import React from 'react';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Banner from '../../Home/Banner/Banner';
import Footer from '../Footer/Footer';


import './Header.css';
const Header = () => {
  const {user,logOut} =useAuth()
  console.log(user);
    return (
        
      <>
      <Navbar bg="dark" variant="dark " sticky="top" collapseOnSelect expand="lg">
      
          <Container>
              <Navbar.Brand className="nav-head">Ora Travel Agency</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end nav">
                  
                  <Link  to="/home">Home</Link>
                  <Link to="/hotels">Hotels</Link>
                  <Link  to="/destinations">Destinations</Link>
                  <Link to="/about">About</Link>
                  {user?.email && <Dropdown>
                            <Dropdown.Toggle variant="success" >DashBoard</Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="/userorderdetails">My Orders</Dropdown.Item>
                                    <Dropdown.Item href="/manageallorder">Manage All Orders</Dropdown.Item>
                                    <Dropdown.Item href="/addnewservice">Add A New Service</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>}
                  {user?.email && <Navbar.Text>
                  Signed in as: <a href="#login">{user?.displayName}
                  </a>
                  </Navbar.Text>}
                  {user?.email ?<Button onClick={logOut} variant="warning">LogOut</Button>:
                      <Link  to="/login">LogIn</Link>}
                  
              </Navbar.Collapse>
              
          </Container>
      </Navbar>
      
      
  </>
    );
};

export default Header;