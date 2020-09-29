import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NewNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/home">Refresh</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Value</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={props.logout}>Logout</NavLink>
            </NavItem>
          </Nav>
          {/* //potentially insert logo here - in this location if we don't want it to have any click effects*/}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NewNav;