import './App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getData } from './actions/index';


function App() {

useEffect(() => {
  getData();
},[])

const handleClick = () => {
  getData()
}
  return (
    <div className="App">
      I'm working
      {/* https://rickandmortyapi.com/api/character */}
      <button onClick={handleClick}>Get Stuff</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    id:"",
    name:"",
    species:""
  }
}

export default connect (mapStateToProps, { getData })(App);
