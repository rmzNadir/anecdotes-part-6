import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import anecdotesService from '../services/anecdotes';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    const { createNew } = anecdotesService;
    event.preventDefault();
    const content = event.target.anecdoteInput.value;
    event.target.anecdoteInput.value = '';
    // Important, createNew returns a promise and we must use await even though we already
    // used await in the function definition ???
    const newAnecdote = await createNew(content);
    dispatch(createAnecdote(newAnecdote));
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
