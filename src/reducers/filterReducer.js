const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return action.value;

    default:
      return state;
  }
};

export const handleFilter = (value) => {
  return {
    type: 'SET_VALUE',
    value,
  };
};

export default filterReducer;
