import './App.css';
import React from 'react';
import { connect } from 'react-redux';

import { getData } from './actions/index';


function App() {

const handleClick = () => {
  getData()
}
  return (
    <div className="App">
     <h2>App Component Working</h2>
      <button onClick={handleClick}>Get Stuff</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name:"",
    isFetching:false,
    error:""
  }
}

export default connect (mapStateToProps, { getData })(App);
