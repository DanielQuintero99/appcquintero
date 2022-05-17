import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { LoginContext } from './LogContext';
import { FaUserAltSlash, FaUserAstronaut } from 'react-icons/fa'

const LogWidget = () => {
  const { user } = useContext(LoginContext);
  return (
    <>
      {user ? <><Link to={"/Profile"}> <FaUserAstronaut size={'20px'} color='black' /> </Link></> : <><Link to={"/checkOut"} ><FaUserAltSlash color='black' /></Link></>}
    </>
  )
}

export default LogWidget