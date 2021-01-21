import './App.css';
import React from 'react';
import styled from 'styled-components';

// components
import Cast from './components/Cast';


const StyledApp = styled.div`
display:flex;
flex-flow:column nowrap;
background:grey;
height: 100vh;

h2 {
  color: green;
}
`

function App(props) {

  return (
    <StyledApp className="App">
     <h2>Introducing</h2>
     <Cast />
    </StyledApp>
  );
}

export default App;
