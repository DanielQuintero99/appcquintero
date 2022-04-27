import React ,{ useState,useContext } from 'react'
import { Card,Button } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from "./CartContext";

const ItemDetail = ({ prd }) => {
    const[displayButtonCart,setDisplayButtonCart]=useState(true);
    const {addToCart}=useContext(CartContext);
  function handleClick(){
      setDisplayButtonCart(false);
  }
    return (
        <>
            <Card className='space' key={prd.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prd.imageId} />
                <Card.Body className='d-flex flex-column'>
                    <Card.Title>{prd.tittle}</Card.Title>
                    <Card.Text>
                        {prd.description}
                    </Card.Text>
                    <Card.Text>
                        $ {prd.price}
                    </Card.Text>
                    {
                        displayButtonCart ? <ItemCount handleClick={handleClick} prd={prd} addToCart={addToCart} stock={prd.stock}/> : <Link to ={"/cart"} ><Button  className="btn btn-primary">ir a Carrito</Button></Link>
                    }
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail