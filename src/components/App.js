import React,{ Component} from 'react';
import {connect } from "react-redux";
import DropDown from './DropDown'
function App(props) {
  return (
    <>
    <DropDown/>
    </>
  );
}

function mapStateToProps(state){
  return{
    todo:state.todo,
  }
}

const connectedComponent=connect(mapStateToProps)(App);
export default connectedComponent;
