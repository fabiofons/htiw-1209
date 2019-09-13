// Action type
export const GET_SOCIALPOST = 'GET_SOCIALPOST';

// Actions to dispatch
export const getSocialPost = (url, size) => dispatch => fetch(url)
  .then(response => response.json())
  .then(data => {
    dispatch({
      type: GET_SOCIALPOST,
      payload: data.splice(0, size)
    });
  });