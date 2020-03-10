﻿import './NavBar.scss';
import Link from 'next/link';
const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <Link href='/'>
              <a className='nav-link'>Home</a>
            </Link>
          </li>
        </ul>
      </div>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
    </nav>
  );
};

export default NavBar;
