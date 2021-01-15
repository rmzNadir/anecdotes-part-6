import React, { useEffect } from 'react';
import { initializeAnecdotes } from './reducers/anecdoteReducer';
import anecdotesService from './services/anecdotes';
import { useDispatch } from 'react-redux';

/* Componentes */
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  return (
    <div>
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
