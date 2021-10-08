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

//use of provider and connect helps to pass state with passing props in every component
function mapStateToProps(state){
  return{
    todo:state.todo,
  }
}

const connectedComponent=connect(mapStateToProps)(App);
export default connectedComponent;
