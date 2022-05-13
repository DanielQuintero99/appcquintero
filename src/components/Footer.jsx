import React from 'react'
import { Navbar,Container  } from 'react-bootstrap'
import {BsMusicNoteList} from 'react-icons/bs'
import LogWidget from './LogWidget'
import CartWidget from './CartWidget'
import LogOutWidget from './LogOutWidget'



const Footer = () => {
  return (
   <>
     <Navbar bg="light" fixed="bottom">
    <Container>
      <LogWidget/>
      <CartWidget/>
      <BsMusicNoteList size={'20px'}/>
      <LogOutWidget/>
    </Container>
  </Navbar>
   </>
  )
}

export default Footer