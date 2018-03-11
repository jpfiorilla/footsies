import * as React from 'react';
import Tone from 'tone';
import { Button, SEO } from '../common';

const tempo = 60 * 60; // 1 beat = 1 frame

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.tone = new Tone.FMSynth().toMaster();
  }
  buildSchedule = (notes = []) => {
    Tone.Transport.schedule(this.tone, 0);
    Tone.Transport.schedule(this.tone, '0:2');
    Tone.Transport.schedule(this.tone, '0:2:2.5');
  };
  render() {
    console.log(this.tone, this.props);
    return (
      <div id="Player">
        <SEO />
        <Button onClick={this.buildSchedule}>Test</Button>
        <Button onClick={this.props.toggleLoop}>Loop</Button>
      </div>
    );
  }
}
