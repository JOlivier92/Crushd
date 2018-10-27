import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HomeNav from './home_nav';
import {showMatches, showResponses } from '../../../actions/nav_actions';


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     showMatches: () => dispatch(showMatches()),
     showResponses: () => dispatch(showResponses())
  }
}


export default connect(null, mapDispatchToProps)(HomeNav);