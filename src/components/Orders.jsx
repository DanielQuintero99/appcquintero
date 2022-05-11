import React,{useContext,useEffect,useState} from 'react'
import { Container,Table } from 'react-bootstrap'
import { LoginContext } from './LogContext'
import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';


const Orders = () => {
    const { user } = useContext(LoginContext);
    const[orders,setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            const db = getFirestore();
            const colRef = collection(db, "sells");
            const q = query(colRef, where("buyer.email", "==", user.email));
            onSnapshot(q, (snapshot) => {
                let ordersRef = []
                snapshot.docs.forEach((doc) => {
                    ordersRef.push({ ...doc.data(), id: doc.id })
                })
                setOrders(ordersRef);
            })
        }
    }, [user]);
  return (
    <Container>
    <h2>Orders</h2>
    <Table  striped bordered hover >
        <thead>
            <tr>
                <th>Order ID</th>
                <th>Total</th>
                <th>Date(D/M/Y/TIME)</th>
                <th>View</th>
            </tr>
        </thead>
        <tbody>
            {
                orders.map((order)=>{
                    return(
                        <tr key={order.id}>
                            <td>
                            {order.id}
                            </td>
                            <td>
                            {order.total +'$'}
                            </td>
                            <td>
                            {new Date(order.buyer.time.seconds *1000).toLocaleString()}
                            </td>
                            <td>
                            <Link to={`/order/${order.id}`}>View</Link>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </Table>
   
</Container>
  )
}

export default Orders