import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';

import {
  openModal,
  closeModal
} from '../../actions/modal_actions';

const msp = (state) => ({

});

const mdp = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(msp, mdp)(Splash);