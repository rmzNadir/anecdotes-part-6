const notificationReducer = (state = 'skere', action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.message;
    default:
      return state;
  }
};

export const setNotificationMessage = (message) => {
  return {
    type: 'SET_MESSAGE',
    message,
  };
};

export default notificationReducer;
