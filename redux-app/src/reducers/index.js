
const initialState = {
  characters:[],
  isFetching:false,
  error:""
}

export const reducer =(state = initialState, action) => {
  switch(action.type) {
    case "FETCH_DATA_START":
      return {
        ...state,
        characters:[...state.characters],
        isFetching: true,
        error:""
      }
    case "FETCH_DATA_SUCCESS":
      console.log(state)
      return {  
        ...state,
        characters:[ ...state.characters, action.payload.map(char => {
          return char.name
        })],
        isFetching: false,
        error:""
      }
    case "FETCH_DATA_FAILTURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default: 
      return state;
  }
};