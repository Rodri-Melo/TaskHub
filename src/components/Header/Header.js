import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';


import { Link } from 'react-router-dom'


function Header() {
  return (

    <header>
      <div>
        <div className='container'>
          <Link to="/">
            < IoMdArrowRoundBack style={{ color: '#29EBAA', fontSize: '40px', margin: '10px' }} />
          </Link >
        </div>
      </div>

    </header>
  );
}

export default Header;