import React,{ useEffect } from 'react';
// redux
import { connect } from 'react-redux';
// action creators
import { getData } from '../actions';

const Cast = (props) => {

  useEffect(() => {
    getData()
  },[])

  console.log(props.state)
  const handleClick = () => {
    console.log('handleClick', props.characters)
  }
  return (
    <div>
      <h2>Rick and Morty Cast</h2>
      {props.isFetching ? <div>Loading Cast...</div> : null}
      {props.error ? <div style= {{ color: "red" }}>{props.error}</div> : null}
      <button onClick={handleClick}>Click to reveal cast!</button>
      {
        props.characters.map(character => (
          <div>{character.character.name}</div>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    characters: state.characters,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps,{ getData })(Cast);
