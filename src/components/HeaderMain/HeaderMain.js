import React from 'react';
import './HeaderMain.css'

import { Link } from 'react-router-dom'


function HeaderMain() {
  return (
    <div>
      <header>
        <div className='container'>
          <div className='logo'>
            <h1>TaskHub</h1>
          </div>

          <div className='btn-newPost'>
            <Link to="/post">
              <button> Add New Post </button>
            </Link >
          </div>
        </div>
      </header>




    </div >
  );
}

export default HeaderMain;