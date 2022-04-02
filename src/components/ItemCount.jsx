import React from "react"
import { useState } from "react"
import { Button } from "react-bootstrap";

export default function ItemCount({stock}) {
    const [count,setCount]=useState(0);
    function add(){
        setCount(count+1);
       if(count>=stock){
           setCount(stock);
       }
    }
    function removeOne(){
        setCount(count-1);
        if(count<=0){
            setCount(0);
        }
    }
    function onAdd(){
        alert("Added to cart " + count + " items");
    } 
  return (

<>
    <div className="containerCount">
    <div className="countCont">
    <Button onClick={removeOne} variant="dark">-</Button>{' '}
    <p>{count}</p>
    <Button onClick={add} variant="success">+</Button>{' '}
    </div>
    <Button onClick={onAdd} variant="warning">Añadir al Carrito</Button>{' '}
    </div>
</>
  );
}