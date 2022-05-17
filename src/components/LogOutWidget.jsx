import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import { LoginContext } from './LogContext'
import { useNavigate } from 'react-router-dom';
import { GrLogout } from 'react-icons/gr'

const LogOutWidget = () => {

  const { user, logOut } = useContext(LoginContext);
  const navigate = useNavigate()
  const handleLogOut = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to logout?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.value) {
        logOut()
        navigate('/')
      }
    })
  }

  return (
    <>
      {user && <GrLogout size={'20px'} color='black' onClick={handleLogOut} />}
    </>
  )
}

export default LogOutWidget