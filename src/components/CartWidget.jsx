import React,{useContext} from 'react';
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'



export default function CartWidget() {
const {cartWidget,displayCartWidget}=useContext(CartContext)
  return (
    <>
      <div className='d-flex '>
      <Link to={"/Cart"}><FaShoppingCart size={'20px'} color="black" />{displayCartWidget?<span className='CartWidgetCounter'><h4>{cartWidget}</h4></span>:<div></div>}</Link> 
      </div>
    </>
  );
}
