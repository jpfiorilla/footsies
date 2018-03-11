import * as React from 'react';
import Tone from 'tone';
import { Button, SEO } from '../common';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.tone = new Tone.Synth(props.synth).toMaster();
    Tone.Transport.loopEnd = '1m';
    Tone.Transport.loop = props.loop || false;
    Tone.Transport.bpm.value = props.tempo; // this.tempoTimesSpeed(props.tempo, props.speed);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loop !== Tone.Transport.loop)
      Tone.Transport.loop = nextProps.loop;
    if (nextProps.speed !== Tone.Transport.bpm.value)
      Tone.Transport.bpm.value = nextProps.speed; // this.tempoTimesSpeed(nextProps.tempo, nextProps.speed);
    if (!Object.is(nextProps.synth) === this.tone)
      this.tone = new Tone.Synth(nextProps.synth).toMaster();
  }
  tempoTimesSpeed = (tempo = this.props.tempo, speed = this.props.speed) =>
    tempo * speed;
  loop = new Tone.Loop(time => {
    this.tone.triggerAttackRelease('C5', '8n', time);
  }, '4n');
  handlePlay = () => {
    this.loop.start(0).stop('2m');
    Tone.Transport.start();
  };
  handleStop = () => Tone.Transport.stop();
  handleSlide = e => {
    console.log(e);
    this.props.setSpeed(e.target.value);
  };
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
        {/*<input
          type="range"
          min={0.1}
          max={2}
          value={this.props.speed || 1}
          onChange={this.handleSlide}
        />*/}
      </div>
    );
  }
}
