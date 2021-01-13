import React from 'react';
import { useDispatch } from 'react-redux';
import { handleFilter } from '../reducers/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(handleFilter(value));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
};

export default Filter;
