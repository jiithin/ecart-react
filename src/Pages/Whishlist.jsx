import React from 'react'
import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlst } from '../Redux/slice/Wishlist'
import { addToCart } from '../Redux/slice/CartSlice'

function Whishlist() {
   const wishlistArray=useSelector((state=>state.wishlistReducer))
   const dispatch=useDispatch()
   const hanldeWishlistCart= (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlst(product.id))
   }
  return (
    <>
    <div className='p-3 mt-5'>

      <Row>
      {
        wishlistArray.length>0?
        wishlistArray.map((product,index)=>(

          <Col key={index} className="mb-2 mt-5" sm={12} md={6} lg={4} xl={3} >
          <Card className='d-flex' >
            <Card.Img variant="top" src={product.thumbnail} style={{height:'200px'}}/>
            <Card.Body>
            <Card.Title style={{height:'3rem'}}>{product.title}</Card.Title>
              
              <Card.Text className='d-flex'>
                {product.description.slice(0,50)}...
              </Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
            <ListGroup.Item>Price : ${product.price}/-</ListGroup.Item>
            </ListGroup>   
            <Card.Body >
               <div className="btn-group d-flex" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary" onClick={()=>dispatch(removeFromWishlst(product.id))}>
                 <i class="fa-solid fa-trash" style={{color: '#ff664e'}}></i>
                </button>

                <button type="button" class="btn btn-secondary" onClick={()=>hanldeWishlistCart(product)}>
                  <i class="fa-solid fa-cart-shopping" style={{color: '#3872d6'}}></i>
                </button>
               </div>
                
              
              {/* <Link className="btn  btn-info ">Add to Cart</Link>
              <Link className="btn  btn-success ms-5"> Buy</Link> */}
        
            </Card.Body>
          </Card>
        </Col>


        )):<div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <img height={'300vh'} width={'500vh'} src="https://www.siku.de/bundles/storefront/assets/illustration/wishlist_empty.svg?170955345111221" alt="empty cart" />

          {/* <img height={'500vh'} width={'500vh'} src="https://lordicon.com/icons/wired/flat/148-trolley-cross.gif" alt="empty cart" /> */}

          <h3 className='text-center mt-5'>Your wishlist is empty</h3>
          </div>
      }
      </Row>
   
    </div>
    </>
    
  )
}

export default Whishlist