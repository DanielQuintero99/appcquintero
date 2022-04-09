import React from "react"
import { useState } from "react"
import { Button } from "react-bootstrap";

export default function ItemCount({ stock }) {
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
    function onAdd() {
        alert("Added to cart " + count + " items");
        setCount(count + count);
        console.log(count);
    }
    return (
        <>
            <div className="countCont">
                <Button className="space" onClick={removeOne} variant="dark">-</Button>{' '}
                <p>{count}</p>
                <Button className="space" onClick={add} variant="success">+</Button>{' '}
            </div>
            <Button onClick={onAdd} variant="warning">Añadir al Carrito</Button>{' '}
        </>
    );
}