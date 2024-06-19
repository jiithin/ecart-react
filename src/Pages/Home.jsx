import React from 'react'
import { Row , Col } from 'react-bootstrap';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../Redux/slice/Wishlist';
import { addToCart } from '../Redux/slice/CartSlice';



function Home() {
  const data=useFetch('https://dummyjson.com/products')
  // console.log(data);
  const dispatch = useDispatch()
  return (
    <>
      <Row className="ms-1 mt-5" >
        { data?.length>0?data.map((product,index)=>(
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
              <button type="button" className="btn btn-secondary" onClick={()=>dispatch(addToWishlist(product))}>
               <i class="fa-solid fa-heart" style={{color: '#ff2e2e'}}></i>
              </button>
              <button type="button" class="btn btn-secondary" onClick={()=>dispatch(addToCart(product))}>
                <i class="fa-solid fa-cart-shopping" style={{color: '#3872d6'}}></i>
              </button>
              <button type="button" class="btn btn-secondary">
              <i class="fa-solid fa-bag-shopping" style={{color: '#efc21f'}}></i>
              </button>
             </div>
              
            
            {/* <Link className="btn  btn-info ">Add to Cart</Link>
            <Link className="btn  btn-success ms-5"> Buy</Link> */}
          </Card.Body>
        </Card>
      </Col>
        )): <p>Nothing to Display !</p>
          
        }
        
      </Row>
    </>
  );
}

export default Home