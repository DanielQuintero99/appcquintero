import React,{useContext} from 'react'
import { Button } from 'react-bootstrap';
import {FiUserX,FiUserCheck} from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { LoginContext } from './LogContext';


const LogWidget = () => {
    const {user,logOut} =useContext(LoginContext);
    const navigate=useNavigate()
    const handleLogOut=()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You can log in again!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logOut!'
            }).then((result) => {
                 logOut()
                Swal.fire(
                    'Logged Out!',
                    'You have been logged out.',
                    'success'
                )
                navigate('/');
            })
        
    }
    console.log(user)
  return (
    <>
        {user?<> <FiUserCheck size="40px" color="white" ></FiUserCheck><Button onClick={()=>handleLogOut()} variant="warning">X</Button></>: <><Link to={"/checkOut"} ><FiUserX size="40px" color="white" /></Link></>}
    </>
  )
}

export default LogWidget