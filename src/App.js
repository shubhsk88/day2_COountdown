import React, { Component } from 'react';
import Countdown from './CountDown';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined
    };
  }

  getTimeRemaining = endTime => {
    let t = Date.parse(endTime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      days: days
    };
  };
  real = () => {
    this.interval = setInterval(() => {
      const endTime = 'March 01 2020 23:59:59 GMT+0200';
      let overall = this.getTimeRemaining(endTime);
      this.setState({
        days: overall.days,
        hours: overall.hours,
        minutes: overall.minutes,
        seconds: overall.seconds,
        endTime: null,
        endDate: null
      });
    }, 1000);
  };
  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  mapChange = (num, inp_min, inp_max, out_min, out_max) => {
    return (
      ((num - inp_min) / (inp_max - inp_min)) * (out_max - out_min) + out_min
    );
  };
  onDateChange = event => {
    event.preventDefault();
    const c = event.target.value;
    this.setState({ endDate: c });
  };
  onTimeChange = event => {
    event.preventDefault();
    this.setState({ endTime: event.target.value });
  };
  combiner = (a, b) => `${a} ${b}:00 `;

  render() {
    this.real();
    const { days, hours, minutes, seconds } = this.state;
    const dayProgress = this.mapChange(days, 0, 30, 0, 360);
    const HourProgress = this.mapChange(hours, 0, 24, 0, 360);
    const MinuteProgress = this.mapChange(minutes, 0, 60, 0, 360);
    const SecondProgress = this.mapChange(seconds, 0, 60, 0, 360);
    return (
      <div>
        <h1>Countdown</h1>
        
        
        <div className="countdown-wrapper">
          <Countdown radius={dayProgress} title="Days" name={days} />

          <Countdown radius={HourProgress} title="Hours" name={hours} />
          <Countdown radius={MinuteProgress} title="Minutes" name={minutes} />
          <Countdown radius={SecondProgress} title="Seconds" name={seconds} />
        </div>
      </div>
    );
  }
}

export default App;
