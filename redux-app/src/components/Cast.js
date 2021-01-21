import React,{ useEffect } from 'react';
import styled from "styled-components";
// redux
import { connect } from 'react-redux';
// action creators
import { getData } from '../actions';

const StyledCast = styled.div`
display:flex;
flex-flow:column nowrap;
justify-content:center;
align-items:center;

h1 {
  font-family: 'Bigelow Rules', cursive;
  text-align:center;
  font-size: 10rem;
  color: #01b4c6;
  text-shadow: 2px 3px #97ce4c;
}

.reveal {
  padding: 10px;
  margin: 5px;
  font-size: 2rem;
  background: #01b4c6;
  color:white;
  border-radius: 15px;
  border: 4px black solid;
}

.character {
  font-size: 20px;
  padding: 7px 5px;
}

`

const Cast = (props) => {

  console.log('Current State', props.state)

  // useEffect(() => {
  //   props.getData()
  // }, [])

  return (
    <StyledCast>
      <h1>Rick and Morty Cast</h1>
      {props.isFetching ? <div>Loading Cast...</div> : null}
      {props.error ? <div style= {{ color: "red" }}>{props.error}</div> : null}
      <button onClick={props.getData}
      className="reveal"
      >
        Click to reveal cast!</button>
      {
        props.characters.map(character => (
          <p className="charcter">{character.name}</p>
        ))
      }
    </StyledCast>
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
