import React, { useState } from 'react';
import propTypes from 'prop-types';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem
} from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const Logo = styled.img`
  width: 13rem;
  `;

  const authenticated = () => (
    <>
    <NavItem>
      <Link className='nav-link' to='/bookshelves'>Bookshelves</Link>
    </NavItem>
    <NavItem>
      <Link className='nav-link' to='/books'>Books</Link>
    </NavItem>
    <NavItem>
      <Link className='nav-link'to='/explore'>Explore</Link>
    </NavItem>
    <NavItem>
      <Link className='nav-link' to='/search'>Search</Link>
    </NavItem>
    </>
  );

  return (
    <div>
      <Navbar light expand='md' className='font-serif text-xl'>
        <NavbarBrand href="/">
        <Logo src={'https://i.imgur.com/Al6yXby.png'}></Logo>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { user && authenticated()}
            <NavItem>
            {
          user
            ? <button className='bg-red-400 hover:bg-red-600 text-white py-1 px-3 rounded-full' id="logOutBtn" onClick={signOutUser}>Sign Out</button>
            : <button className='bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full' id="logInBtn" onClick={signInUser}>Sign In</button>
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
