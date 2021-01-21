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

.character {
  font-size: 20px;
  padding: 7px 5px;
}

`

const Cast = (props) => {

  console.log('Current State', props.state)

  useEffect(() => {
    props.getData()
  }, [])
  return (
    <StyledCast>
      <h2>Rick and Morty Cast</h2>
      {props.isFetching ? <div>Loading Cast...</div> : null}
      {props.error ? <div style= {{ color: "red" }}>{props.error}</div> : null}
      {/* <button onClick={props.getData}>Click to reveal cast!</button> */}
      {
        props.characters.map(character => (
          <p className="character">{character.name}</p>
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
