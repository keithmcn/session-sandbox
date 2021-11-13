import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" sticky='top'>
      <NavbarBrand href='/' >
        <img src='./logo512.png' height='40' title='To Home Page' alt='main logo'/>
      </NavbarBrand >
      <NavbarToggler onClick={toggle} className="mr-2" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/home">View All</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/select">Select</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/add">Add</NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            <NavLink href="/profile">
              <img src='./logo192.png' height='20' title='To Profile Page' alt='secondary logo'/>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar >
  );
}

export default AppNavbar;



