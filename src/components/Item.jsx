import React from 'react'
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
          <Button as={Link} to={`/item/${id}`} variant="warning">Detalle</Button>{' '}
        </Card.Body>
      </Card>
    </>
  );
}
