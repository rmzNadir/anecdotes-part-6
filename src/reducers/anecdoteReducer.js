import anecdotesService from '../services/anecdotes';

const anecdotesReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data;

    case 'NEW_ANECDOTE':
      return [...state, action.data];

    case 'ADD_VOTE':
      const id = action.data.id;

      const anecdote = state.find((a) => a.id === id);

      const updatedArr = state
        .map((a) =>
          a.id === id ? { ...anecdote, votes: anecdote.votes + 1 } : a
        )
        .sort((a, b) => parseFloat(b.votes) - parseFloat(a.votes));

      return updatedArr;

    default:
      return state;
  }
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    });
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.createNew(content);
    return dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    });
  };
};

export const addVote = (id) => {
  return {
    type: 'ADD_VOTE',
    data: { id },
  };
};

export default anecdotesReducer;
