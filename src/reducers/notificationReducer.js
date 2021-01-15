const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.content;
    case 'REMOVE_NOTIFICATION':
      return '';
    default:
      return state;
  }
};

export const setNotification = (content, duration) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      content,
    });

    setTimeout(
      () => {
        dispatch({ type: 'REMOVE_NOTIFICATION' });
      },
      duration ? duration * 1000 : 5000
    );
  };
};

export default notificationReducer;
