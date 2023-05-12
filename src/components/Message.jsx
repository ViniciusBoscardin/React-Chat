import React from 'react';

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img
          src='https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=''
        />
        <span>Just now</span>
      </div>
      <div className='messageContent'>
        <p>Olá</p>
        <img
          src='https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=''
        />
      </div>
    </div>
  );
};

export default Message;
