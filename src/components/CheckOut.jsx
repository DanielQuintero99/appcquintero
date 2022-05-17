import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from './CartContext'
import { Button, Container, Table } from 'react-bootstrap';
import { addDoc, collection, getDoc, getFirestore, serverTimestamp, doc } from "firebase/firestore"
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from './LogContext';
import { getAuth, updateProfile } from 'firebase/auth';
import { SignUp } from './SignUp';



const CheckOut = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");
    const [date, setDate] = useState("");
    const [showBill, setShowBill] = useState(false);
    const [order, setOrder] = useState("")
    const [newTotal, setNewTotal] = useState(0)
    const [newCart, setNewCart] = useState([]);
    const [buyer, setBuyer] = useState();
    const { cart, total, buyAll } = useContext(CartContext);
    const { signUp, logIn, user } = useContext(LoginContext);
    const navigate = useNavigate();


    function sendOrder() {
        setShowBill(true);
        const db = getFirestore();
        const orders = collection(db, "sells");
        addDoc(orders, buyer).then((res) => {
            let orderRecive = res.id;
            setNewTotal(total);
            setOrder(orderRecive);
            setNewCart(cart);
            const orderInfo = doc(db, `sells`, orderRecive);
            getDoc(orderInfo).then((res) => {
                let date = new Date(res.data().buyer.time.seconds * 1000);
                setDate(date.toLocaleDateString());
            })
        }).catch((err) => {
            Swal.fire({
                title: 'Error',
                text: err.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        })
        buyAll();
    }

    useEffect(() => {
        if (user) {
            let buyer = {
                buyer: {
                    name: user.displayName,
                    email: user.email,
                    phone: phone,
                    adress: adress,
                    time: serverTimestamp()
                },
                items: cart,
                total: total
            }
            setBuyer(buyer)
        } else {
            let buyer = {
                buyer: {
                    name: name,
                    email: email,
                    phone: phone,
                    adress: adress,
                    time: serverTimestamp()
                },
                items: cart,
                total: total
            }
            setBuyer(buyer)
        }
    }, [user, name, email, phone, adress, cart, total]);

    let handleSubmit = async (e) => {
        e.preventDefault();
        const regexEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        const regexName = /^(([A-Za-z]+[-']?)*([A-Za-z]+)?\s)+([A-Za-z]+[-']?)*([A-Za-z]+)?$/;

        if (name === "" || email === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Do not forget to fill in all the fields!',
            })
            return;
        }
        if (email !== "" && !regexEmail.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please verify your Email',
            })
            return;
        }
        if (name !== "" && !regexName.test(name)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please verify your name',
            })
            return;
        } else {
            await signUp(email, password);
            const auth = getAuth()
            await updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have successfully signed up! Welcome to the family!',
                })
            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                })
            });
            return;
        }
    }
    let finishWhenLogIn = (e) => {
        e.preventDefault();
        const regexPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        const regexAdress = /^[a-zA-Z0-9\s,'-]*$/;
        if (phone === "" || adress === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Do not forget to fill in all the fields!',
            })
            return;
        }
        if (phone !== "" && !regexPhone.test(phone)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please verify your phone',
            })
            return;
        }
        if (adress !== "" && !regexAdress.test(adress)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please verify your address',
            })
            return;
        } else {
            Swal.fire({
                title: 'Are your personal data correctly defined?',
                text: `Name: ${user.displayName} \n Email: ${user.email} \n Phone: ${phone} \n Adress: ${adress}`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: `No, take me back to the form`,
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Thank you!',
                        text: 'Your order has been sent!',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            sendOrder()
                        }
                    })
                }
            })
        }
    }
    let handleLogIn = async (e) => {
        e.preventDefault();
        const regexEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        if (email === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Do not forget to fill in all the fields!',
            })
            return;
        }
        if (email !== "" && !regexEmail.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please verify your Email',
            })
            return;
        } else {
            try {
                await logIn(email, password);
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                })
                return;
            }
            Swal.fire({
                icon: 'success',
                title: 'You successfully logged in!',
                text: `Email: ${email}`,
                confirmButtonText: 'Ok',
            }).then((result) => {
                if (cart.length > 0) {
                    if (result.isConfirmed) {
                        Swal.fire({
                            text: 'Write your shippin data to finish your order',
                            confirmButtonText: 'OK',
                        })
                    } else if (result.isDenied) {
                        Swal.fire('Write your info');
                    }
                } else {
                    navigate("/");
                }
            })
        }
    }

    return (
        <>
            {!showBill ?
                <SignUp
                    phone={phone}
                    setPhone={setPhone}
                    adress={adress}
                    setAdress={setAdress}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    name={name}
                    setName={setName}
                    setPassword={setPassword}
                    finishWhenLogIn={finishWhenLogIn}
                    handleLogIn={handleLogIn}
                    handleSubmit={handleSubmit}
                    user={user}
                    cart={cart}
                />

                :
                <Container className=' customContainer d-flex justify-content-center align-items-center'>
                    <div className='bill'>
                        <div className='bill-header'>
                            <h1>Your Bill</h1>
                            <h4>Thank you for your purchase!</h4>
                        </div>
                        <div className='billBody'>
                            <p> Purchase Order : {order} </p>
                            <p> Date (D/M/Y) : {date} </p>
                            <p> Name : {user ? user.displayName : name} </p>
                            <p> Email : {user ? user.email : email} </p>
                            <p> Phone : {phone} </p>
                            <p> Address : {adress} </p>
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
                                        newCart.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.count}</td>
                                                <td>{item.tittle}</td>
                                                <td>{item.price * item.count}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                            <p> Total : {newTotal} </p>
                            <Link to={"/"}><Button className='space'>Back to Home</Button></Link>
                            <Link to={"/orders"}><Button className='space'>View Orders</Button></Link>
                        </div>
                    </div>
                </Container>
            }
        </>
    )
}

export default CheckOut