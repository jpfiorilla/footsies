import * as React from 'react';
import Tone from 'tone';
import { Button } from '../common';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.tone = new Tone.FMSynth();
  }
  render() {
    return <div id="root" />;
  }
}
