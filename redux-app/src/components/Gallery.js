import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getData} from '../actions';


const Gallery = ({ characters, isFetching, error, getData}) => {
  useEffect(() => {
    getData()
  },[]);


  const handleClick =() => {
    getData();
  }
  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Here they come!</h2>;
  }

  return (
    <>
      <h2>Meet the Gang!</h2>
      {characters.map(char => {
        return (
          <div>{char.name}</div>
        )
      })}
      <button onClick={handleClick}>Get new quote</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    characters:[...state.characters],
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps,{ getData })(Gallery);