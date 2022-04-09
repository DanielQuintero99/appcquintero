import React from 'react'
import { Card } from 'react-bootstrap'

const ItemDetail = ({ prd }) => {
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
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail