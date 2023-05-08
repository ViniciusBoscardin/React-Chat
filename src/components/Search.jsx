import React from 'react';

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='find a user' />
      </div>
      <div className='userChat'>
        <img
          src='https://images.pexels.com/photos/1855582/pexels-photo-1855582.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=''
        />
        <div className='userChatInfo'>
          <span>Dani</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
