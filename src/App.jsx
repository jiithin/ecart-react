
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'

import Whishlist from './Pages/Whishlist'
import Cart from './Pages/Cart'
import Home from './Pages/Home'


function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Whishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
