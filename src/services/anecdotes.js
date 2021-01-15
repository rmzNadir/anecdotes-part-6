import axios from 'axios';

const baseURL = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const res = await axios.get(baseURL);
  return res.data.sort((a, b) => parseFloat(b.votes) - parseFloat(a.votes));
};

const createNew = async (content) => {
  const res = await axios.post(baseURL, { content, votes: 0 });
  return res.data;
};

const addVote = async ({ id, votes }) => {
  console.log('votes', votes);
  const res = await axios.patch(`${baseURL}/${id}`, { votes: votes + 1 });
  console.log('res', res.data);
  return res.data;
};

export default { getAll, createNew, addVote };
