import React, { useEffect } from "react"
import { useState } from "react"
import { Button } from "react-bootstrap";

export default function ItemCount({ stock, addToCart}) {   
    const [count, setCount] = useState(0);
    function add() {
        setCount(count + 1);
        if (count >= stock) {
            setCount(stock);
        }
    }
    function removeOne() {
        setCount(count - 1);
        if (count <= 0) {
            setCount(0);
        }
    }
    const [disable,setDisable]=useState(true); 
    useEffect(() => {
     if(count===0){
         setDisable(false);
     }else{
         setDisable(true);
     }
      }, [count,disable])
    return (
        <>
            <div className="countCont">
                <Button className="space" onClick={removeOne} variant="dark">-</Button>
                <p>{count}</p>
                <Button className="space" onClick={add} variant="success">+</Button>
            </div>{
               disable?<Button onClick={()=>addToCart(count)} variant="warning">Añadir al Carrito</Button>:<Button onClick={()=>addToCart(count)} variant="warning" disabled >Añadir al Carrito</Button>
        }
        </>
    );
}