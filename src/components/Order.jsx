import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, getFirestore, doc } from 'firebase/firestore'
import { Table, Button, Spinner,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Order = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    let db = getFirestore();
    const item = doc(db, "sells", id);
    getDoc(item).then((res) => {
      let newItem = res.data();
      setItems(newItem.items);
      let oneOrder = { id: res.id, ...res.data() }
      setOrder(oneOrder)
    })
  }, [id]);
  return (
    <>
      {
        !order.id ?
        <div className="colum">
        <div className="loaderContainer" >
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
        <h4 className="loadingProducts">Loading...</h4>
    </div>
       : 
       <Container className='mt-5 customContainer d-flex justify-content-center align-items-center'>
       <div className='bill'>
           <div className='bill-header'>
               <h1>Order No: {order.id} </h1>
           </div>
           <div className='billBody'>
               <p> Order ID : {order.id} </p>
               <p> Date (D/M/Y) : {new Date(order.buyer.time.seconds * 1000).toLocaleString()}</p>
               <p> Name : {order.buyer.name} </p>
               <p> Email : {order.buyer.email} </p>
               <p> Phone : {order.buyer.phone} </p>
               <p> Address : {order.total} </p>
               <Table striped bordered hover>
                   <thead>
                       <tr>
                           <th>Amount</th>
                           <th>Product</th>
                           <th>Partial Price</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           items.map(item => (
                               <tr key={item.id}>
                                   <td>{item.count}</td>
                                   <td>{item.tittle}</td>
                                   <td>{item.price}</td>
                               </tr>
                           ))
                       }
                   </tbody>
               </Table>
               <p> Total : {} </p>
               <Link to={"/"}><Button className='space'>Back to Home</Button></Link>
               <Link to={"/orders"}><Button className='space'>View Orders</Button></Link>
           </div>
       </div>
   </Container>
      }
    </>
  )
}

export default Order