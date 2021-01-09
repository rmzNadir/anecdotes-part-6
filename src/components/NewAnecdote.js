import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';

const NewAnecdote = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdoteInput.value;
    event.target.anecdoteInput.value = '';
    dispatch(createAnecdote(content));
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name='anecdoteInput' />

        <button>create</button>
      </form>
    </div>
  );
};

export default NewAnecdote;
