import React from 'react';
import moment from 'moment';

const Post = (props) => {
  const { id, user, created_at, text } = props.p;
  const { name } = user;
  return (
    <div className='frame' key={id}>
      <h2>{name}</h2>
      <p className='date'>{moment(created_at).format('DD/MM/YYYY HH:MM')}</p>
      <p>{text}</p>
    </div>
  );
}

export default Post;
