
const initialState = {
  characters:[]
}

export const reducer =(state = initialState, action) => {
  switch(action.type) {
    case "FETCH_DATA_START":
      return {
        ...state,
        name:"",
        isFetching: true,
        error:""
      }
    case "FETCH_DATA_SUCCESS":
      return {  
        ...state,
        // characters:[ ...state.characters, action.payload.map(char => {
        //   return char
        // })],
        isFetching: false,
        error:""
      }
    case "FETCH_DATA_FAILTURE":
      return {
        ...state,
        name:"",
        isFetching: false,
        error: action.payload
      }
    default: 
      return state;
  }
};