import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { GET_SOCIALPOST } from './actions/socialpost';

const reducer = (state, action) => {
  if(action.type === GET_SOCIALPOST) {
    return { 
      ...state,
      posts: action.payload
    };
  };

  return state;
};

export default createStore(reducer, { posts: [] }, applyMiddleware(thunk));