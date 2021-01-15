import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdoteInput.value;
    event.target.anecdoteInput.value = '';
    dispatch(createAnecdote(content));
    dispatch(
      setNotification(`Anecdote: '${content}' successfully created!`, 3.5)
    );
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

export default AnecdoteForm;
