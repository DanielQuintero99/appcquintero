import React,{useContext} from 'react';
import { CartContext } from './CartContext'
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default function CartWidget() {
const {cartWidget,displayCartWidget}=useContext(CartContext)
  return (
    <>
      <div className='d-flex '>
      <Link to={"/Cart"}><GiShoppingCart size="40px" color="white" />{displayCartWidget?<span className='CartWidgetCounter'><h4>{cartWidget}</h4></span>:<div></div>}</Link> 
      </div>
    </>
  );
}
