import React from "react";
import { connect } from 'react-redux';
import './App.css';

// Components
import ConnectedForm from "./components/Form";
import Results from "./components/Results";

const App = props => {
  return (
    <div>
      { props.username ? <Results /> : <ConnectedForm /> }  
    </div>
  )
}

const mapStateToProps = state => ({username: state.searchUser.username});

export default connect(mapStateToProps)(App);