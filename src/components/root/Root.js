import * as React from 'react';
import Tone from 'tone';
import { Button, SEO } from '../common';

const tempo = 60 * 60; // 1 beat = 1 frame

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.tone = new Tone.MembraneSynth().toMaster();
    Tone.Transport.loopEnd = '1m';
    Tone.Transport.loop = props.loop || false;
    Tone.Transport.bpm.value = props.tempo || 120 || tempo;
    this.buildSchedule();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loop !== Tone.Transport.loop)
      Tone.Transport.loop = nextProps.loop;
  }
  loop = new Tone.Loop(time => {
    this.tone.triggerAttackRelease('C1', '8n', time);
  }, '4n');
  buildSchedule = (notes = []) => {
    // Tone.Transport.schedule(this.tone, 0);
    // Tone.Transport.schedule(this.tone, '0:2');
    // Tone.Transport.schedule(this.tone, '0:2:2.5');
    // set Tone.Transport.loopEnd to sum of scheduled tones here
  };
  handlePlay = () => {
    this.loop.start(0).stop('2m');
    Tone.Transport.start();
  };
  handleStop = () => Tone.Transport.stop();
  render() {
    console.log(this.tone, this.props);
    return (
      <div id="Player">
        <SEO />
        <Button onClick={this.buildSchedule}>Schedule</Button>
        <Button onClick={this.handlePlay}>Play</Button>
        <Button onClick={this.handleStop}>Stop</Button>
        <Button onClick={this.props.toggleLoop}>{`Loop = ${this.props.loop
          ? 'Y'
          : 'N'}`}</Button>
      </div>
    );
  }
}
