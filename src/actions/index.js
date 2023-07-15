import axios from 'axios';

export const fetchNews = () => async dispatch => {
  const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=f5da6ff82e8249f49ea39f08a6b58aca');
  
  dispatch({ type: 'FETCH_NEWS', payload: response.data.articles });
};
