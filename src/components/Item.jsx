import React from 'react'
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount.jsx';

export default function Item({ id, price, name, image, description }) {

  return (
    <>
      <Card className='space' key={id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text>
            $ {price}
          </Card.Text>
          <ItemCount stock={5} />
        </Card.Body>
      </Card>
    </>
  );
}
