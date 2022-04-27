import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext'
import { Table, Container,Button,Stack, Row } from 'react-bootstrap';

const Cart = () => {
  const { cart, removeFromCart, buyAll, removeOne,total,displayCart,addOne } = useContext(CartContext);
  return (
    <>
      <div>
        {
          displayCart ?
          <div>
            <h1>Cart</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Product</th>
                  <th>Count</th>
                  <th>Partial Price</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map(item => (
                    <tr key={item.id}>
                      <td>{item.count}</td>
                      <td>{item.name}</td>
                      <td> <Container className='countCont'> <Button variant='dark' onClick={() => removeOne(item.id)}>-</Button> <Button variant="danger" onClick={() => removeFromCart(item.id)} >X</Button> <Button variant="success" onClick={() => addOne(item.id,item.stock)}>+</Button></Container> </td>
                      <td>{item.price*item.count}</td>
                    </tr>
                  ))
                }
                <tr>
                  <td colSpan={4}> <Stack direction="horizontal">
                    <div><b> Total Price: </b></div>
                    <div className=" ms-auto ">$ {total}</div>
                  </Stack> </td>
                </tr>
              </tbody>
            </Table>
            <Button variant="warning" onClick={() => buyAll()}>Buy All</Button>
          </div>
            :
            <Container className=" d-flex flex-column align-items-center ">
              <Row  >
              <h1>Cart is empty</h1>
              </Row>
              <Row>
              <h2> There is nothing in the cart </h2>
              </Row> 
              <Row>
              <Link to="/"><Button>Back to Store</Button></Link>
              </Row>
            </Container>
        }
      </div>

    </>
  )
}

export default Cart