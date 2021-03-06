import React, { useContext, useEffect, useState } from 'react'
import { Table, Row, Container, Button } from 'react-bootstrap'
import { LoginContext } from './LogContext'
import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import { Link, Navigate } from 'react-router-dom';


const Orders = () => {
    const { user } = useContext(LoginContext);
    const [orders, setOrders] = useState([]);
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
        <>
            {
                user ?
                    orders.length === 0 ?

                        <Container className=" d-flex flex-column align-items-center mainTitle">
                            <Row>
                                <h1>You have no orders</h1>
                            </Row>
                            <Row>
                                <h2> Do you want create a new order? </h2>
                            </Row>
                            <Row>
                                <Link to="/"><Button>Back to Store</Button></Link>
                            </Row>

                        </Container>
                        :
                        <div className='mt'>
                            <h2 className='mainTitle'>Orders</h2>
                            <Table striped bordered hover >
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
                                        orders.map((order) => {
                                            return (
                                                <tr key={order.id}>
                                                    <td>
                                                        {order.id}
                                                    </td>
                                                    <td>
                                                        {order.total + '$'}
                                                    </td>
                                                    <td>
                                                        {new Date(order.buyer.time.seconds * 1000).toLocaleString()}
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
                        </div>
                    :
                    <>
                        <Navigate to="/" />
                    </>
            }
        </>
    )
}

export default Orders