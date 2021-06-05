import React, { useState } from 'react';
import propTypes from 'prop-types';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
    <NavItem>
      <Link to='/bookshelves'>Bookshelves</Link>
    </NavItem>
    <NavItem>
      <Link to='/books'>Books</Link>
    </NavItem>
    <NavItem>
      <Link to='/explore'>Explore</Link>
    </NavItem>
    <NavItem>
      <Link to='/search'>Search</Link>
    </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="faded" light expand='md'>
        <NavbarBrand href="/">BestReads</NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { user && authenticated()}
            <NavItem>
            {
          user
            ? <Button id="logOutBtn" onClick={signOutUser}>Sign Out</Button>
            : <Button id="logInBtn" onClick={signInUser}>Sign In</Button>
        }
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: propTypes.any
};

export default NavBar;
