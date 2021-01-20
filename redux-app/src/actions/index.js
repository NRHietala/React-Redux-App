import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILTURE = 'FETCH_DATA_FAILTURE';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
    
    axios
    .get('https://rickandmortyapi.com/api/character')
    .then(res => {
      console.log(res)
      dispatch({ type:FETCH_DATA_SUCCESS, payload:res.results })
    })
    .catch(err => {
      console.log(err)
      // dispatch({ type:FETCH_DATA_FAILTURE, payload:      })
    })
}

