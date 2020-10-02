import React, { useState } from 'react';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./style.css";

const NewNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navStyle" light expand="md">
        <NavbarBrand> 
          <span className="title">Refresh<img src="./assets/images/logo100x100.png" height="36px" width="36px" /></span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
             <Button color="white"> <Link to="/home" class="navLink">Home</Link></Button>
            </NavItem>
            <NavItem>
              <Button color="white"><Link to="/value" class="navLink">Value</Link></Button>
            </NavItem>
           <Button color="white"> <NavItem onClick={props.logout} >
             <span class="navLink">Logout</span>
            </NavItem></Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NewNav;