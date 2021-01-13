import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const title = useSelector((state) => state.notification);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };

  return title !== '' && <div style={style}>{title}</div>;
};

export default Notification;
