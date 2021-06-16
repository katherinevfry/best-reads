import React, { useState } from 'react';
import propTypes from 'prop-types';
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
        <NavItem>
          <Link className='text-white text-md px-4 py-2 inline-block hover:text-red-400 hover:no-underline' to='/bookshelves'>Bookshelves</Link>
        </NavItem>
        <NavItem>
          <Link className='text-white text-md px-4 py-2 inline-block hover:text-red-400 hover:no-underline' to='/books'>Books</Link>
        </NavItem>
        <NavItem>
          <Link className='text-white text-md px-4 py-2 inline-block hover:text-red-400 hover:no-underline' to='/explore'>Explore</Link>
        </NavItem>
        <NavItem>
          <Link className='text-white text-md px-4 py-2 inline-block hover:text-red-400 hover:no-underline' to='/search'>Search</Link>
        </NavItem>
    </>
  );

  return (
    <div>
     {user && <Navbar light expand='md' className='shadow-md bg-medblue rounded-b-lg'>
        <span className='w-56'>
          <Link to='/'>
            <img src={'https://i.imgur.com/RYT95Rk.png'}></img>
          </Link>
        </span>
        <NavbarToggler onClick={toggle} className="mr-1" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto">
            {authenticated()}
          <NavItem>
            <button className="inline-block mr-0 text-md px-4 py-2 border rounded text-red-400 border-red-400 hover:border-transparent hover:text-white hover:bg-red-400" id="logOutBtn" onClick={signOutUser}>Sign Out</button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      }
    </div>
  );
};

NavBar.propTypes = {
  user: propTypes.any
};

export default NavBar;
