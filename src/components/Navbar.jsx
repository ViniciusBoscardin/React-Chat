import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>React Chat</span>
      <div className='user'>
        <img
          src='https://images.pexels.com/photos/1855582/pexels-photo-1855582.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=''
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
