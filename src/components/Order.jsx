import React,{useEffect,useState} from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getDoc,getFirestore,doc } from 'firebase/firestore'
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Order = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    let db=getFirestore();
    const item=doc(db,"sells",id);
    getDoc(item).then((res)=>{
      let newItem=res.data();
      setItems(newItem.items);
     let oneOrder={id:res.id, ...res.data()} 
      setOrder(oneOrder)})
  }, [id]);
  return (
    <>
    { id!==order.id ?
    <Navigate to='/'/>
    :
      order.id ?
      <>
      <p>Order Id: {order.id}</p>
      <p>name: {order.buyer.name}</p>
      <p>Email:{order.buyer.email}</p>
      <p>Adress:{order.buyer.adress}</p>
      <p>Phone:{order.buyer.phone}</p>
      <div className='d-flex' >Items:{items.map((item)=>{
        return(
          
          <Card className='space' key={item.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.imageId} />
          <Card.Body className='d-flex flex-column'>
            <Card.Title>{item.tittle}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Card.Text>
              $ {item.price}
            </Card.Text>
            <Button as={Link} to={`/item/${id}`} variant="warning">Detail</Button>{' '}
          </Card.Body>
        </Card>
        )
      })}</div>
      <p>Total:${order.total}</p>
      <p>Date:{new Date(order.buyer.time.seconds *1000).toLocaleString()}</p>
      </>
      :<p>Loading...</p>
      
    }
    </>
  )
}

export default Order