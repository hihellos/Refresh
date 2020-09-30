import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./style.css";

const NewNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navStyle" light expand="md">
        <NavbarBrand href="/home" className="title"> 
          <span className="rStyle">R</span>efreshed 
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {/* <NavLink href="/home">Home</NavLink> */}
              <Link to="/home">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/value">Value</Link>
            </NavItem>
            <NavItem>
              <Link to="/login">Logout</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NewNav;