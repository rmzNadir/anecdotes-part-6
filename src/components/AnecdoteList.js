import React from 'react';
import Filter from '../components/Filter';
import { connect } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {
  const { anecdotes } = props;
  // Filter the anecdotes based on the filter value
  // const anecdotes = useSelector(({ anecdotes, filter }) =>
  //   anecdotes.filter(({ content }) =>
  //     content.toLowerCase().includes(filter.toLowerCase())
  //   )
  // );

  const vote = (anecdote) => {
    const { content } = anecdote;
    props.addVote(anecdote);
    props.setNotification(`You voted '${content}'`, 5);
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
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes.filter(({ content }) =>
      content.toLowerCase().includes(state.filter.toLowerCase())
    ),
  };
};

const mapDispatchToProps = {
  addVote,
  setNotification,
};

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);

export default ConnectedAnecdoteList;
