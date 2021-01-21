import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILTURE } from '../actions/index';

const initialState = {
  isFetching: false,
  characters:[],
  error:""
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        characters:[],
        isFetching: true,
        error:""
      }
    case FETCH_DATA_SUCCESS:
      return {  
        ...state,
        characters:[...action.payload],
        isFetching: false,
        error:""
      }
    case FETCH_DATA_FAILTURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default: 
      return state;
  }
};