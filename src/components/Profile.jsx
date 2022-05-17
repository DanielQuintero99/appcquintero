import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import { LoginContext } from './LogContext';
import Logo from '../../src/logos/Owl.png';
import { Spinner } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';

const Profile = () => {
    const { user } = useContext(LoginContext);

    return (
        <>
            {!user ?
                <Navigate to='/checkOut' /> :
                user ?
                    <Container className='marginTop'>
                        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                            <div className="card p-4"> <div className=" image d-flex flex-column justify-content-center align-items-center">
                                <img src={Logo} height="150" width="150" alt='userPic' />
                                <span className="name mt-3">{user.displayName}</span> <span className="idd">{user.email}</span>
                                <div className=" d-flex mt-2">
                                    <Link to={"/orders"}><button className="btn1 btn-dark">View Orders</button></Link>
                                </div>
                                <div className="text mt-3"> <span>Hi {user.displayName}!<br />
                                    We want to take a little space in your profile to remind you what a wonderful person you are, plus you have a great style with Shiro&Kuro</span>
                                </div>
                                <div className=" px-2 rounded mt-4 date "> <span className="join">Thanks a lot! 💗</span> </div> </div> </div>
                        </div>
                    </Container>
                    :
                    <>
                        <div className="colum">
                            <div className="loaderContainer" >
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                            <h4 className="loadingProducts">Loading...</h4>
                        </div>
                    </>
            }
        </>
    )
}

export default Profile