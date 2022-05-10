import React, { useState, useContext } from 'react'
import { CartContext } from './CartContext'
import { Form, Button, Container,Table } from 'react-bootstrap';
import { addDoc, collection, getDoc, getFirestore, serverTimestamp,doc } from "firebase/firestore"
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from './LogContext';


const CheckOut = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[password,setPassword]=useState("");
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");
    const [date, setDate] = useState("");
    const [showBill, setShowBill] = useState(false);
    const [order, setOrder] = useState("")
    const [newTotal, setNewTotal] = useState(0)
    const [newCart, setNewCart] = useState([]);
    const [sigIn, setSigIn] = useState(false);
    const { cart, total, buyAll } = useContext(CartContext);
    const {signUp,logIn} =useContext(LoginContext);
    const navigate=useNavigate();
   
    let buyer = {
        buyer: { 
            name: name, 
            email: email,
            phone: phone, 
            adress: adress, 
            time:serverTimestamp() },
        items: cart,
        total: total
    }

    let handleSignIn = () => {
        sigIn ? setSigIn(false) : setSigIn(true)
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log(buyer)
        const regexEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        const regexPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        const regexName = /^(([A-Za-z]+[-']?)*([A-Za-z]+)?\s)+([A-Za-z]+[-']?)*([A-Za-z]+)?$/;
        const regexAdress = /^[a-zA-Z0-9\s,'-]*$/;
        if (name === "" || email === "" || phone === "" || adress === "") {
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
            try {
                await signUp( email,password);
               } catch (error) {
                   Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: error.message,
                   })
                     return;
               }
            Swal.fire({
                title: 'Are your personal data correctly defined?',
                text: `Name: ${name} \n Email: ${email} \n Phone: ${phone} \n Adress: ${adress}`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: `No, take me back to the form`,
            }).then((result) => {
                if (result.isConfirmed) {  
                    if (cart.length === 0) {
                        Swal.fire({
                            icon:'success',
                            title: 'Your account has been created!',
                            text: 'You can now see the store and start shopping!',
                        })
                        navigate("/")
                        return;
                    }else{
                        Swal.fire({
                            title: 'Thank you!',
                            text: 'Your order has been sent!',
                            icon: 'success',
                            confirmButtonText: 'OK',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                setShowBill(true);
                                const db = getFirestore();
                                const orders = collection(db, "sells");
                                addDoc(orders, buyer).then((res) => {
                                    let orderRecive = res.id;
                                    setNewTotal(total);
                                    setOrder(orderRecive);
                                    setNewCart(cart);
                                    const orderInfo=doc(db,`sells`, orderRecive);
                                    getDoc(orderInfo).then((res)=>{
                                      let date=new Date(res.data().buyer.time.seconds*1000);
                                        setDate(date.toLocaleDateString());
                                    })                           
                                }).catch((err) => {
                                    console.log(err)
                                })
                                buyAll();
                            }
                        })
                    }              

                } else if (result.isDenied) {
                    Swal.fire('Write your info', '', 'info');
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
                await logIn( email,password);
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
                if(cart.length>0){
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Thank you!',
                        text: 'Your order has been sent!',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            setShowBill(true);
                            const db = getFirestore();
                            const orders = collection(db, "sells");
                            addDoc(orders, buyer).then((res) => {
                                let orderRecive = res.id;
                                setNewTotal(total);
                                setOrder(orderRecive);
                                setNewCart(cart);
                                const orderInfo=doc(db,`sells`, orderRecive);
                                getDoc(orderInfo).then((res)=>{
                                  let date=new Date(res.data().buyer.time.seconds*1000);
                                    setDate(date.toLocaleDateString());
                                })                           
                            }).catch((err) => {
                                console.log(err)
                            })
                            
                            buyAll();
                        }
                    })
                } else if (result.isDenied) {
                    Swal.fire('Write your info', '', 'info');
                }}else{
                    navigate("/");
                }
            })
        }
    }

    return (
        <>{
            !showBill ?
                <Container className=' customContainer d-flex justify-content-center align-items-center'>
                    <section className="left">
                        <div>
                            <h1>Life has great moments</h1>
                            <p>Please LogIn/SignUp to finish </p>
                        </div>
                        <h3>Thank You!</h3>
                    </section>
                    <section className='right'>
                        {!sigIn ? 
                        <><Form onSubmit={handleSubmit}>
                            <h3>SignUp</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>What's Your Name?</Form.Label>
                                <Form.Control type="text" placeholder="Type Your Name and Surname" value={name} onChange={(e) => { setName(e.currentTarget.value) }} />
                                <Form.Text className="text-muted">
                                    Name and Surname are required ( Example: jhon doe)
                                </Form.Text>
                           </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Type Your Phone Number" value={phone} onChange={(e) => { setPhone(e.currentTarget.value) }} />
                                <Form.Text className="text-muted">
                                    Only numbers are allowed no space (Example: 34654789)
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Adress" value={adress} onChange={(e) => { setAdress(e.currentTarget.value) }} />
                                <Form.Text className="text-muted">
                                    Please write your full address (Example: Av. Siempre Viva, 123, 456)
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Set your Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.currentTarget.value) }} />
                                <Form.Text className="text-muted">
                                    Please write your full address (Example: Av. Siempre Viva, 123, 456)
                                </Form.Text>
                            </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                        </Form>
                        
                        <Button onClick={handleSignIn} variant="dark" type="submit" >
                                    I already have an account
                                </Button>    
                                </>: 
                                <>
                                <Form onSubmit={handleLogIn}>
                            <h3>SignIn</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Paasword</Form.Label>
                                <Form.Control type="password" placeholder="TypeYourPassword" value={password} onChange={(e) => { setPassword(e.currentTarget.value) }} />
                            </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                        </Form>
                        
                        <Button onClick={handleSignIn} variant="dark" type="submit" >
                                   SignIn
                                </Button>  
                                </>
                            }
                    </section>
                </Container>
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
                            <p> Name : {name} </p>
                            <p> Email : {email} </p>
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
                      <td>{item.price*item.count}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
                            <p> Total : {newTotal} </p>
                            <Link to={"/"}><Button>Back to Home</Button></Link>
                        </div>
                    </div>
                    
                </Container>
        }
        </>
    )
}

export default CheckOut