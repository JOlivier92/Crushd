import { connect } from 'react-redux';
import HomeNav from './home_nav';
import {showMatches, showResponses } from '../../../actions/nav_actions';

const mapDispatchToProps = (dispatch) => {
  return {
     showMatches: () => dispatch(showMatches()),
     showResponses: () => dispatch(showResponses())
  }
}


export default connect(null, mapDispatchToProps)(HomeNav);