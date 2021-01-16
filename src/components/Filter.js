import React from 'react';
import { connect } from 'react-redux';
import { handleFilter } from '../reducers/filterReducer';

const Filter = (props) => {
  const handleChange = (value) => {
    props.handleFilter(value);
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

const mapDispatchToProps = {
  handleFilter,
};

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);

export default ConnectedFilter;
