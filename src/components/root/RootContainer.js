import * as React from 'react';
import { connect } from 'react-redux';
import Root from './Root';
import { toggleLoop } from '../../redux/actions/actions';

export default connect(state => state.player, { toggleLoop })(Root);
