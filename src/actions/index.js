import axios from 'axios';

export const fetchNews = () => async dispatch => {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
        //   apiKey: 'f5da6ff82e8249f49ea39f08a6b58aca'
          apiKey: process.env.REACT_APP_API_KEY
        }
      });
  
  dispatch({ type: 'FETCH_NEWS', payload: response.data.articles });
};
