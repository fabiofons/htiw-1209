import React from 'react';
import moment from 'moment';

const Post = (props) => {
  return (
    <div className='frame' key={props.p.id}>
      <h2>{props.p.user.name}</h2>
      <p className='date'>{moment(props.p.created_at).format('DD/MM/YYYY HH:MM')}</p>
      <p>{props.p.text}</p>
    </div>
  );
}

export default Post;