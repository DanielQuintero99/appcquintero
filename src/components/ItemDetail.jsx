import React from 'react'
import { Card,Button } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ prd }) => {
    const[add,setAdd]=useState(0);
    const[displayButtonCart,setDisplayButtonCart]=useState(true);
  function onAdd(num) {
    alert("Added to cart " + num + " items");
    setAdd(num);
    setDisplayButtonCart(false);
    console.log(add);
}
    return (
        <>
            <Card className='space' key={prd.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prd.image} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title>{prd.name}</Card.Title>
                    <Card.Text>
                        {prd.description}
                    </Card.Text>
                    <Card.Text>
                        $ {prd.price}
                    </Card.Text>
                    {
                        displayButtonCart ? <ItemCount addToCart={onAdd} stock={5}/> : <Link to ={"/cart"} ><Button className="btn btn-primary">ir a Carrito</Button></Link>
                    }
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail