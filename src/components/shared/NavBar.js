import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase.init'

const NavBar = () => {
  return (
    <Navbar bg='warning' expand='lg' sticky='top'>
      <Container fluid>
        <Navbar.Brand href='/'>RIM ELECTRIC TOOLS</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll'></Navbar.Toggle>
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='ms-auto my-2 my-lg-0' navbarScroll>
            <Nav.Link className='px-2 text-light' as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link className='px-2 text-light' as={Link} to='/blog'>
              Blog
            </Nav.Link>

            {/* {user?.email ? <Nav.Link className="px-2 text-light" as={Link} to="/addproduct">Add Product</Nav.Link> : ""

                        }
                        {
                            user?.email ? <Nav.Link className="px-2 text-light" as={Link} to="/manage-inventory">Manage Inventory</Nav.Link> : ""
                        }
                        {user?.uid ?
                            <button onClick={handleLogout} className='btn btn-warning'>Logout</button>
                            :
                            <Nav.Link as={Link} to="/login"><button className='btn btn-warning'>Login</button></Nav.Link>
                        } */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
