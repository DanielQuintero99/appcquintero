import React from 'react'
import { Navbar,Container  } from 'react-bootstrap'
import {BsMusicNoteList} from 'react-icons/bs'
import LogWidget from './LogWidget'
import CartWidget from './CartWidget'
import LogOutWidget from './LogOutWidget'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
   <>
     <Navbar bg="light" fixed="bottom">
    <Container>
      <LogWidget/>
      <CartWidget/>
      <Link to={"/play"}>
      <BsMusicNoteList color='black' size={'20px'}/>
      </Link>
      <LogOutWidget/>
    </Container>
  </Navbar>
   </>
  )
}

export default Footer