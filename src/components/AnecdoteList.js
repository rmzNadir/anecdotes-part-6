import React from 'react';
import Filter from '../components/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import {
  setNotification,
  removeNotification,
} from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch();
  // Filter the anecdotes based on the filter value
  const anecdotes = useSelector(({ anecdotes, filter }) =>
    anecdotes.filter(({ content }) =>
      content.toLowerCase().includes(filter.toLowerCase())
    )
  );

  const vote = (id, content) => {
    dispatch(addVote(id));
    dispatch(setNotification(`You voted '${content}'`));
    setTimeout(
      () => dispatch(removeNotification(`You voted '${content}'`)),
      5000
    );
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      {anecdotes.map((anecdote) => {
        const { id, content, votes } = anecdote;
        return (
          <div key={id}>
            <div>{content}</div>
            <div>
              has {votes}
              <button onClick={() => vote(id, content)}>vote</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnecdoteList;
