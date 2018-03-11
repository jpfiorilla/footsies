import * as React from 'react';
import { connect } from 'react-redux';
import Root from './Root';
import { toggleLoop, setSpeed } from '../../redux/actions/actions';

export default connect(({ player, synth }) => ({ ...player, synth }), {
  toggleLoop,
  setSpeed
})(Root);
