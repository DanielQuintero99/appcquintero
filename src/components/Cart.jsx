import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext'

const Cart = () => {
  const { cart, removeFromCart, buyAll, removeOne,total,displayCart } = useContext(CartContext);
  return (
    <>
      <h1>Cart</h1>
      <div>
        {
          displayCart ?
            cart.map(item => (
              <div key={item.id}>
                <div>name {item.name}</div>
                 <img src={item.image} alt="" />
                <div>price {item.price}</div>
                <div>amount {item.count}</div>
                <button onClick={() => removeOne(item.id)}>Remove One</button>
                <button onClick={() => removeFromCart(item.id)}>Remove All</button>
                <p>Total: {total}</p>
                <button onClick={() => buyAll()}>Buy All</button>
              </div>
            ))
            :
            <div>
              <p> There is nothing in the cart </p>
              <Link to="/"><button>Back to Store</button></Link>
            </div>
        }
      </div>

    </>
  )
}

export default Cart