import React, { useEffect, useState } from 'react'
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';

import { removeFromCart , emptyCart } from '../Redux/slice/CartSlice';
import { addToWishlist } from '../Redux/slice/Wishlist';
import { useNavigate } from 'react-router-dom';


function Cart() {
  const cart=useSelector((state=>state.cartReducer))

  const navigate= useNavigate()

  const cartArray=useSelector((state=>state.cartReducer))
  const dispatch=useDispatch()

  const handleCartItem= (product)=>{
    dispatch(addToWishlist(product))
    dispatch(removeFromCart(product.id))
   }

   //total amout of cart
   const [total,setTotal]=useState(0)

   const getCartTotal=()=>{
    if(cartArray.length>0){
    setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
     setTotal(0)
     }
   }

   useEffect(()=>{
    getCartTotal()
   },[cartArray])

   const handleCart=()=>{
    dispatch(emptyCart())
    alert("Order placed successfully..Thank you for purchasing")
    navigate('/')
   }
   
  return (
    <>
    <div className='p-3 mt-5'>

      
      {
        cartArray.length>0?
         <div className="row mt-5">
          <div className="col-lg-9">
            <table className='table rounded w-100'>
              <thead>
                <tr>
                <th>#</th>
                <th >Product</th>
                <th className='text-center'>Product Image</th>
                <th className='text-center'>Price</th>
                <th className='text-center'>Action</th>
                </tr>
              </thead>
              
              <tbody>
                {
                  cartArray.map((product,index)=>(
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{product.title}</td>
                      <td><img src={product.thumbnail} height={'150px'} alt="" /></td>
                      <td>$ {product.price}</td>
                      <td> <div className="btn-group d-flex" role="group" aria-label="Basic example">
                          <button type="button" className="btn btn-secondary" onClick={()=>handleCartItem(product)}>
                          <i class="fa-solid fa-heart" style={{color: '#ff2e2e'}}></i></button>
                          <button type="button" className="btn btn-secondary" onClick={()=>dispatch(removeFromCart(product.id))}>
                          <i class="fa-solid fa-trash" style={{color: '#ff664e'}}></i></button>

                          </div>
                          </td>
                      
                    </tr>
                  ))
                }
              </tbody>

            </table>
          </div>
          <div className="col-lg-3">
            <div className="border rounded shadow p-2 w-100">
              <h2 className='text-primary fw-bolder'>Cart Summary</h2>
              <h4>Total Products: <span>{cart.length}</span></h4>
              <h5>Total: <span className='text-danger'>${total}</span></h5>
              <div className='d-grid'>
                <button onClick={handleCart} className='btn btn-success' type='button'><i class="fa-solid fa-bag-shopping" style={{color: '#efc21f'}}></i> Check Out</button>
              </div>
            </div>
          </div>
         </div>:<div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
          

          <img height={'500vh'} width={'500vh'} src="https://lordicon.com/icons/wired/flat/148-trolley-cross.gif" alt="empty cart" />

          <h3 className='text-center '>Your Cart is empty</h3>
          </div>
      }
      
   
    </div>
    </>
  )
}

export default Cart