import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div >
         <MDBNavbar light bgColor=' dark '>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
         
           <h4 style={{color:"black"}} className='ms-3 mt-2'> Tic Tac Toe</h4>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header