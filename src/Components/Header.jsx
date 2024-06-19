import React from 'react'


import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { FcShop } from "react-icons/fc";
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';


function Header() {
  const wishlist=useSelector((state=>state.wishlistReducer))
  const cart=useSelector((state=>state.cartReducer))
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top mb-4">
        <Container fluid>
        <FcShop className='fa-3x me-3'/>
          <Navbar.Brand href="/" className='text-success ' style={{fontSize:'30px'}}> E-Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 p-2"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="btn-group" role="group" aria-label="Basic example">
                 <Link to={'/wishlist'} className="btn text-white " style={{backgroundColor: '#ff2e2e'}}>{wishlist.length}</Link>
                <Link to={'/wishlist'} className="btn btn-secondary me-3">Wishlist <i class="fa-solid fa-heart" style={{color: '#ff2e2e'}}></i> </Link>
                 </div>


                 <div className="btn-group" role="group" aria-label="Basic example">
                 <Link to={'/cart'} className="btn btn-primary " >{cart.length}</Link>
                <Link to={'/cart'} className="btn btn-secondary" >Cart <i class="fa-solid fa-cart-shopping" style={{color: '#3872d6'}}></i> </Link>
                 </div>

            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header