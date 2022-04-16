import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { useState } from 'react'

const ItemDetail = ({ prd }) => {
    const[add,setAdd]=useState(0);
  function onAdd(num) {
    alert("Added to cart " + num + " items");
    setAdd(num);
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
                    <ItemCount addToCart={onAdd} stock={5}/>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail