import React, { useState, createContext, useEffect } from 'react'

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [displayCart, setDisplayCart] = useState();
    const [total, setTotal] = useState(0)
    const[cartWidget,setCartWidget]=useState()
    const[displayCartWidget,setDisplayCartWidget]=useState(false)
    const addToCart = (item) => {
        setCart([...cart, item]);
        const index = cart.findIndex(cartItem => cartItem.id === item.id);
        if (index !== -1) {
            let newCart = [...cart];
            newCart[index].count++;
            setCart(newCart);
        }
    }
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }
    const removeOne = (id) => {
        const index = cart.findIndex(cartItem => cartItem.id === id);
        if (index !== -1) {
            let newCart = [...cart];
            newCart[index].count--;
            if (newCart[index].count === 0) {
                newCart.splice(index, 1,);
            }
            setCart(newCart);
        }

    }
    const buyAll = () => {
        setCart([]);
    }

    useEffect(() => {
        let total = 0;
        let countInCart=0
        cart.forEach(item => {
            total += item.price * item.count;
        });
        cart.forEach(prd=>{
            countInCart+=prd.count
        })
        setTotal(total);
        setCartWidget(countInCart);
        if (countInCart===0) {
            setDisplayCartWidget(false)
        }else{
            setDisplayCartWidget(true)
        }
    }, [cart])
 
    useEffect(() => {
        if (cart.length === 0) {
            setDisplayCart(false);
        } else {
            setDisplayCart(true);
        }
    }, [cart]);


    

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, buyAll, removeOne, total, displayCart,cartWidget,displayCartWidget}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;