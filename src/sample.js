import React, { Component } from 'react';

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

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div>
        <h1>Countdown</h1>
        <div className="countdown-wrapper">
          <div className="countdown-item">
            {days}
            <span>days</span>
          </div>
          <div className="countdown-item">
            {hours}
            <span>hours</span>
          </div>
          <div className="countdown-item">
            {minutes}
            <span>minutes</span>
          </div>
          <div className="countdown-item">
            {seconds}
            <span>seconds</span>
          </div>
        </div>
      </div>
    );
  }
}
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  var d = [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y
  ].join(' ');

  return d;
}

export default App;
