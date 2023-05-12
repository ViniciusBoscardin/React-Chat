import React, { useState } from 'react';
import { collection, query, where } from 'firebase/firestore';
import { db } from '../firebase';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = () => {
    const q = query(
      collection(db, 'user'),
      where('displayName', '==', username)
    );
  };

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  };

  return (
    <div className='search'>
      <div className='searchForm'>
        <input
          type='text'
          placeholder='Find a user'
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='userChat'>
        <img
          src='https://images.pexels.com/photos/227294/pexels-photo-227294.jpeg?auto=compress&cs=tinysrgb&w=1600'
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
