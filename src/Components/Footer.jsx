import React from 'react'

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
     <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>



{/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
  <div className='me-5 d-none d-lg-block'>
    <span>Get connected with us on social networks:</span>
  </div>

  <div>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="facebook-f" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="twitter" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="google" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="instagram" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="linkedin" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="github" />
    </a>
  </div>
</section> */}


<section className=''>
  <MDBContainer className='text-center text-md-start mt-5 p-4'>
    <MDBRow className='mt-3'>
      <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
        <h6 className='text-uppercase fw-bold mb-4'>
          <MDBIcon icon="shop" className="me-3" />
          E-Cart
        </h6>
        <p>
      Buy products
        </p>
      </MDBCol>

      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
        <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
        <p>
        <Link to={'/'}>
          <a href='#!' className='text-reset'>
            Home Page
          </a>
          </Link>
        </p>

        <p>
        <Link to={'/wishlist'} >
          <a href='#!' className='text-reset'>
            Wishlist
          </a>
          </Link>
        </p>
        
        <p><Link to={'/cart'}>
          <a href='#!' className='text-reset'>
            Cart
          </a>
          </Link>
        </p>
      
      </MDBCol>

      <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
        <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
        
        <Link to={'https://react.dev/'} style={{ textDecoration:'none'}}>React</Link>

      <br />
       <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration:'none'}}>React Bootsrtap</Link>

      <br />
       <Link to={'https://bootswatch.com/'} style={{ textDecoration:'none'}}>BootsWatch</Link>
      
      </MDBCol>

      

      <MDBCol md="4" lg="4" xl="5" className='mx-auto mb-md-0 mb-4'>
        <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
        <form action=''>
    <MDBRow>
      

      <MDBCol md='7' size='12' className='mb-4 mb-md-0'>
        <MDBInput type='email' id='email1' label='' placeholder='Enter your email' />
      </MDBCol>

      <MDBCol size='auto' className='mb-4 mb-md-0'>
        <button className='btn btn-primary'>Subscribe</button>
      </MDBCol>
    </MDBRow>
  </form>


  
      <br />
        <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="facebook-f" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="twitter" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="google" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="instagram" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="linkedin" />
    </a>
    <a href='' className='me-4 text-reset'>
      <MDBIcon fab icon="github" />
    </a>

   

      </MDBCol>
    </MDBRow>
  </MDBContainer>


</section>

<div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
  © 2024 Copyright:
  <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
    E-Cart Built with React
  </a>
</div>
</MDBFooter>
    </>
  )
}

export default Footer