const anecdotesReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data;
    case 'ADD_VOTE':
      const id = action.data.id;

      const anecdote = state.find((a) => a.id === id);

      const updatedArr = state
        .map((a) =>
          a.id === id ? { ...anecdote, votes: anecdote.votes + 1 } : a
        )
        .sort((a, b) => parseFloat(b.votes) - parseFloat(a.votes));

      return updatedArr;

    case 'NEW_ANECDOTE':
      return [...state, action.data];

    default:
      return state;
  }
};

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  };
};

export const addVote = (id) => {
  return {
    type: 'ADD_VOTE',
    data: { id },
  };
};

export const createAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: anecdote,
  };
};

export default anecdotesReducer;
